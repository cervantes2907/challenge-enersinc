import { Modal, Button, Input, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Api from "../../services/Api";
import { setModalEdit, setModalMessage, setUser, setUsers, setMessage} from "../../store/slices/users";

const { Item } = Form;

export const ModalEditUser = () => {
  const { modalEdit, modalMessage, user, list: users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const openClose = () => {
    dispatch(setModalEdit(!modalEdit));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(
      setUser({
        ...user,
        [name]: value,
      })
    );
  };

  const editUser = () => {
    let data = { ...user };
    delete data.id;

    Api.put(`/users/${user.id}`, data)
      .then(() => {
        let userList = [];

        for (let i = 0; i < users.length; i++) {
          if ( users[i].id === user.id ){
            userList.push(user)
          } else {
            userList.push(users[i])
          }
            
        }
        dispatch(setUsers(userList))
        openClose();
        dispatch(setMessage(`El usuario ${user.name} ha sido modificado correctamente!`))
        dispatch(setModalMessage(!modalMessage))
      })
      .catch((error) => {
        openClose();
        if(error.response.status === 422){
          dispatch(setMessage(`Error. ${error.response.data.data[0].field}: ${error.response.data.data[0].message}`))
        } else {
          dispatch(setMessage(`No fué posible actualizar el usuario ${user.name}`))
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
      visible={modalEdit}
      title="Editar Usuario"
      onCancel={openClose}
      centered
      footer={[
        <Button onClick={openClose}>Cancelar</Button>,
        <Button type="primary" onClick={editUser}>
          Editar
        </Button>,
      ]}
    >
      <Form>
        <Item label="Name">
          <Input
            name="name"
            onChange={handleChange}
            value={user && user.name}
          />
        </Item>
        <Item label="Email">
          <Input
            name="email"
            onChange={handleChange}
            value={user && user.email}
          />
        </Item>
        <Item label="Gender">
          <Input
            name="gender"
            onChange={handleChange}
            value={user && user.gender}
          />
        </Item>
        <Item label="Status">
          <Input
            name="status"
            onChange={handleChange}
            value={user && user.status}
          />
        </Item>
      </Form>
    </Modal>
  );
};
