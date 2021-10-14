import { useEffect } from "react";
import { Button, Table } from "antd";
import "./TableList.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, setUser, setModalCreate, setModalEdit, setModalDelete } from "../../store/slices/users";
import { ModalCreateUser } from "../modals/ModalCreateUser";
import { ModalEditUser } from "../modals/ModalEditUser";
import { ModalDeleteUser } from "../modals/ModalDeleteUser";
import { ModalMessageUser } from "../modals/ModalMessageUser";

export const TableList = () => {
  const { list: users, modalCreate, modalEdit, modalDelete } = useSelector((state) => state.users); 

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "ButtonAccion",
      key: "buttonaccion",
      render: (row) => (
        <>
            <Button type="primary" onClick={() => selectUser(row, 'Edit')}>Editar</Button>{" "}
            <Button type="danger" onClick={() => selectUser(row, 'Delete')}>Eliminar</Button>{" "}
        </>
      ),
    },
  ];

  const openCloseModalCreate = () => {
    dispatch(setModalCreate(!modalCreate))
  }

  const openCloseModalEdit = () => {
    dispatch(setModalEdit(!modalEdit))
  }

  const openCloseModalDelete = () => {
    dispatch(setModalDelete(!modalDelete))
  }

  const selectUser = (user, userCase) => {
    dispatch(setUser(user));
    (userCase === 'Edit') ? openCloseModalEdit() : openCloseModalDelete();
  }

  return (
    <div className="tableContainer">
      <Button type="primary" style={{marginBottom: '1rem'}} onClick={openCloseModalCreate}>Crear Usuario</Button>
      <Table columns={columns} dataSource={users} bordered rowKey="id" />
      
      <ModalCreateUser />
      <ModalEditUser />
      <ModalDeleteUser />
      <ModalMessageUser />

    </div>
  );
};
