import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Api from "../../services/Api";
import { setModalDelete, setModalMessage, setUser, setUsers, setMessage } from "../../store/slices/users";


export const ModalDeleteUser = () => {
  const { modalDelete, modalMessage, user, list: users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const openClose = () => {
    dispatch(setModalDelete(!modalDelete));
  };


  const deleteUser = () => {

    Api.delete(`/users/${user.id}`)
      .then(() => {
        dispatch(setUsers(users.filter(element => element.id !== user.id)))
        openClose();
        dispatch(setMessage(`El usuario ${user.name} ha sido eliminado correctamente!`))
        dispatch(setModalMessage(!modalMessage))
      })
      .catch(() => {
        openClose();
        dispatch(setMessage(`No fué posible eliminar el usuario ${user.name}`))        
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
      visible={modalDelete}
      onCancel={openClose}
      centered
      footer={[
        <Button onClick={openClose}>No</Button>,
        <Button type="danger" onClick={deleteUser}>
          Si
        </Button>,
      ]}
    >
      Estas seguro que deseas eliminar al usuario <strong>{user && user.name}</strong>?
    </Modal>
  );
};
