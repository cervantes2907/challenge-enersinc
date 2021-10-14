import { Button } from 'antd'
import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'

export const Menu = () => {
  
  return (
    <div>
      <nav>
        <Link  to="/"><Button className="buttonHome" type="primary">Inicio</Button></Link>
        <Link to="/usuarios"><Button type="primary">Usuarios</Button></Link>
      </nav>
    </div>
  )
}



