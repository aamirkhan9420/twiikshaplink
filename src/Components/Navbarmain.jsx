import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppContext } from './Context/AuthContext'
import style from "./Navbar.module.css"
import Twiiklogo from './Twiiklogo'

export default function Navbarmain() {
let {email}=React.useContext(AppContext)
console.log(email)
    let links = [{ path: "/exerciselog", title: "Exerciselog" }, { path: "/results", title: "Results" }, { path: "/challenges", title: "Challenges" }, { path: "/friends", title: "Friends" }, { path: "/groups", title: "Groups" }]
    return (
        <div className={style.Navbarmain}>
            <div className={style.Navbarmain_top}>
                <div className={style.Navbarmain_top_div1}>
                    <div>
                        <Twiiklogo id={style.twiiklogomain} />
                    </div>
                    <div className={style.Navbarmain_top_div1_div2}>
                        {links.map((link) => (
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? style.others : style.default
                                }
                                key={link.path}
                                to={link.path}
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </div>
                    <div className={style.Navbarmain_top_div1_div3}></div>
                </div>
            </div>
            <div className={style.Navbarmain_bottom_div}>
                <h1>{email}</h1>
                <Link to="/">Logout</Link>
            </div>
        </div>
    )
}
