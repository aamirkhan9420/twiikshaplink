import React from 'react'
import Top from './Top'
import style from "./Navbar.module.css"
import ButtonComponent from './ButtonComponent'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


export default function Contact() {
  return (
    <div>
      <Navbar />
      <Top className={style.Getapp_div1} />
      <div className={style.btnGetapp_create_contact_heading}>
        <h1>Are You not a member?</h1>
        <div className={style.btnGetapp_create_contact}>
          <Link to="/createaccount">
            <ButtonComponent />
          </Link>
          <Link to="/gettheapp">
            <button className={style.btngetapp_in_creat_contact}>Get the app</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
