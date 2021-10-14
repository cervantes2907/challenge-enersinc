import { Button } from 'antd'
import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'

export const Menu = () => {
  
  return (
    <div>
      <nav>
        <Link  to="/"><Button className="buttonHome" type="primary">Home</Button></Link>
        <Link to="/editpeople"></Link>
        <Link to="/createpeople"></Link>
      </nav>
    </div>
  )
}



