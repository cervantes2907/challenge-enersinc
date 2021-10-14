import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setModalMessage, setMessage } from "../../store/slices/users";


export const ModalMessageUser = () => {
  const { modalMessage, message } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const openClose = () => {
    dispatch(setModalMessage(!modalMessage));
    dispatch(
      setMessage('')
    ); 
  };


  return (
    <Modal
      visible={modalMessage}
      onCancel={openClose}
      centered
      footer={[
        <Button type="danger" onClick={openClose}>Ok</Button>,
      ]}
    >
      {message}
    </Modal>
  );
};
