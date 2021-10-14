import React from 'react'
import { Button } from 'antd';
import './CreatePeople.css'

export const CreatePeople = () => {
    return (
        <>
        <h1> Crear Informacion Persona </h1>
        <form className="container-form">        
            <div>
                <input className="name-create" type="text" placeholder="Name"></input>
            </div>
            <div>
                <input className="email-create" type="email" placeholder="Email"></input>
            </div>
            <div>
                <input className="gender-create" type="text" placeholder="Gender"></input>
            </div>
            <div>
            <Button className="editar-create" type="primary">Editar</Button>
            <Button className="eliminar-create" type="danger">Eliminar</Button>
            </div>
        </form>
        </>

    )
}
