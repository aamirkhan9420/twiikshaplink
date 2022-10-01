import React from 'react'
import style from "./Navbar.module.css"
export default function ButtonComponent({id}) {
  return (
    <div>
        <button className={style.btnCreataccount } id={id}> Create account</button>
    </div>
  )
}
