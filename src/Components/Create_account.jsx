import React from 'react'
import Navbar from './Navbar'
import style from "./Navbar.module.css"
export default function CreateAccount() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={style.main_div_creat_contact}>
        <div className={style.main_div_creat_contact_div1}>
          <h2 className={style.main_div_creat_contact_div1_heading}>Do you have a code for TeamBoost?</h2>
          <p className={style.main_div_creat_contact_div1_para}>If you have received a code to join a TeamBoost, then you can create your account here on the web, fill in the code below and click "Proceed".</p>
          <div className={style.main_div_creat_contact_div1_inpbtndiv}>
            <input type="text" placeholder='Enter your code here' />
            <button>Procedd</button>
          </div>
        </div>

      </div>
    </div>
  )
}
