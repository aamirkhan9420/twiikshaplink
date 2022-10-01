
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ButtonComponent from './ButtonComponent'
import { Button, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"


import style from "./Navbar.module.css"
import Twiiklogo from './Twiiklogo'
import { useState } from 'react'

import { AppContext } from './Context/AuthContext'
import { useEffect } from 'react'

export default function Navbar() {
  let { HandleAuth } = React.useContext(AppContext)
  let [data, setData] = useState({ Username: "", Password: "" })
  let [record, setRecord] = useState([])
  function HandleInput(e) {
    let name = e.target.name;
    let value = e.target.value
    setData({ ...data, [name]: value })
  }
  useEffect(()=>{
    console.log(data.Username)
  },[data.Username])
  function Handleuserdata(e) {
    e.preventDefault()
    let newRecord = { ...data, id: new Date().toString() }
    setRecord([...record, newRecord])
   
console.log(record)
    HandleAuth(data.Username)
  }








  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)


  let links = [{ path: "/gettheapp", title: "Get the app" }, { path: "/contact", title: "Contact" }]
  // { path: "/login", title: "Login" }

  return (
    <div className={style.Navbar}>

      <div className={style.NavHome}>
        <Link to="/">
          <Twiiklogo className={style.NavHome} />

        </Link>
      </div>
      <div className={style.NavChiled2} >

        <div>


          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            isCentered

          >

            <form action="" onSubmit={Handleuserdata} >

              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>

                    <Input ref={initialRef} value={data.Username} type="email" onChange={HandleInput} placeholder='Username_or_emial' name='Username' id='Username' />

                  </FormControl>

                  <FormControl mt={4}>

                    <Input ref={initialRef} value={data.Password} type="password" onChange={HandleInput} placeholder='Password' name='Password' id='Password' />

                  </FormControl>
                  <FormControl m={["12"]} mt={16}>
                    <FormControl >
                      {/* <Link to='/landing'> */}
                        <Button color={"#FFFFFF"} backgroundColor={"#2F9BAC"} width={"300px"} mr={3} onClick={onClose} type='submit' >
                          Login
                        </Button>
                      {/* </Link> */}
                    </FormControl>

                    <h1 id={style.or}> or</h1>

                    <FormControl mt={2}>
                      <a href="https://www.facebook.com/dialog/oauth?response_type=code&amp;client_id=26013359906&amp;redirect_uri=https%3A%2F%2Fwww.twiikapp.com%2Fconnect.php%2Fapp%2Ffacebook&amp;state=https%3A%2F%2Fwww.shapelink.com%2Fen%2Fuser%2Ffacebooklogin&amp;scope=email">
                        <Button className={style.facebooklogin} color={"#FFFFFF"} backgroundColor={"#293D69"} width={"300px"} mr={3}  >
                          <img className={style.facebookloginimg} src="facebooklogin.png" alt="" />
                          Login With Facebook
                        </Button>
                      </a>

                      <h1 id={style.forgotpassword}> Forgotten the password? &nbsp;·&nbsp;  Create account</h1>






                    </FormControl>
                  </FormControl>
                </ModalBody>

                <ModalFooter>



                </ModalFooter>
              </ModalContent>
            </form>
          </Modal>
        </div>


        {links.map((el) => (
          <NavLink key={el.path} to={el.path}>
            {el.title}
          </NavLink>
        ))

        }

        <h1 className={style.openModal} onClick={onOpen}> Login</h1>
        <Link to="/createaccount">
          <ButtonComponent />
        </Link>
      </div>

    </div>
  )
}
