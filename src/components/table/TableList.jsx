import { useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { Button, Table} from 'antd'
import Api from '../../services/Api'
import './TableList.css'


export const TableList = () => {

   const [people, setPeople] = useState([])

   useEffect(() => {
       Api.get(`https://gorest.co.in/public/v1/users`)
       .then((response) => {
         setPeople(response.data.data)
     })
   }, [])

   const columns=[

    {
       title: 'Id',
       dataIndex:'id',
       key:'id',
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name"
    },

    {
     title: "Email",
     dataIndex: "email",
     key: "email"
    },
    {
        title: "Gender",
        dataIndex: "gender",
        key: "gender"
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status"
    },
    {
        title: "ButtonAccion",
        dataIndex: "buttonaccion",
        key: "buttonaccion",
        render: file => <> 
        <Link to="/editpeople"><Button  type="primary">Editar</Button> {" "} </Link>
        <Button type="danger">Eliminar</Button> {" "}
        <Link to="/createpeople"><Button type="primary">Agregar Personas</Button></Link>
        </>
    },
   ];
   

    return (

        <div className="tableContainer">
            <Table columns={columns} dataSource={people} rowKey='id' />

        </div>
    )
}
