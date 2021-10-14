import React from 'react'
import {Button} from 'antd'
import './EditPeople.css'

export const EditPeople = () => {
    return (
        <>
         <h1 className="titleEdit">Editar Informacion De Personas</h1>

            <form className="container-edit"> 

                <div>
                    <input className="name-edit" type="text" placeholder="Name"></input>
                </div>
                <div>
                    <input className="email-edit-user" type="email" placeholder="Email"></input>
                </div>
                <div>
                    <input className="gender-edit" type="text" placeholder="Gender"></input>
                </div>
                <div>
                <Button className="button-edit-user" type="primary">Editar</Button>
                <Button className="button-cancelar-edit" type="danger">Cancelar</Button>
                </div>
            </form>
        </>
    )
}
