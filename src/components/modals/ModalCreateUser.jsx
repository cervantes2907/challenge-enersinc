import { Modal, Button, Input, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Api from "../../services/Api";
import { setModalCreate, setUsers, setUser, setModalMessage, setMessage } from "../../store/slices/users";

const { Item } = Form;

export const ModalCreateUser = () => {
  const { list: users, user, modalCreate, modalMessage } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  

  const openClose = () => {
    dispatch(setModalCreate(!modalCreate));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setUser({
      ...user,
      [name]: value,
    }));
  };

  const createUser = () => {

    let data = {...user}
    delete data.id;

    Api.post('/users', data)
      .then((response) => {
        dispatch(setUsers(users.concat(response.data.data)));
        openClose();
        dispatch(setMessage(`El usuario ${user.name} ha sido creado correctamente!`))
        dispatch(setModalMessage(!modalMessage))
      })
      .catch((error) => {
        openClose();
        if(error.response.status === 422){
          dispatch(setMessage(`Error. ${error.response.data.data[0].field}: ${error.response.data.data[0].message}`))
        } else {
          dispatch(setMessage(`No fué posible crear el usuario ${user.name}`))
        }
        
        dispatch(setModalMessage(!modalMessage))
      });
    
    dispatch(
      setUser({
        id: '',
        name: '',
        email: '',
        gender: '',
        status: '',
      })
    );
  };

  return (
    <Modal
      visible={modalCreate}
      title="Crear Usuario"
      destroyOnClose={true}
      onCancel={openClose}
      centered
      footer={[
        <Button onClick={openClose}>Cancelar</Button>,
        <Button type="primary" onClick={createUser}>Crear</Button>,
      ]}
    >
      <Form>
        <Item label="Name">
          <Input name="name" onChange={handleChange} />
        </Item>
        <Item label="Email">
          <Input name="email" onChange={handleChange} />
        </Item>
        <Item label="Gender">
          <Input name="gender" onChange={handleChange} />
        </Item>
        <Item label="Status">
          <Input name="status" onChange={handleChange} />
        </Item>
      </Form>
    </Modal>
  );
};
