import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Challenges from '../Components/Challenges'
import Contact from '../Components/Contact'
import CreateAccount from '../Components/Create_account'
import Exerciselog from '../Components/Exerciselog'
import Friends from '../Components/Friends'
import Getapp from '../Components/Getapp'
import Groups from '../Components/Groups'
import Home from '../Components/Home'
import Landing from '../Components/Landing'
import Login from '../Components/Login'
import Results from '../Components/Results'
import TermsCondition from '../Components/Terms_Condition'


export default function Allroutes() {
  return (
    <div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/gettheapp" element={<Getapp />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/createaccount" element={<CreateAccount />}/>
        <Route path="/termscondition" element={<TermsCondition />}/>
        <Route path="/landing" element={<Landing />}/>
        
        {/* <Route path="/exerciselog" element={<Exerciselog />}/> */}
        <Route path="/exerciselog" element={<Exerciselog />}/>
        <Route path="/results" element={<Results />}/>
        <Route path="/challenges" element={<Challenges/>}/>
        <Route path="/friends" element={<Friends />}/>
        <Route path="/groups" element={<Groups />}/>
        <Route path="/" element={<h1>Logout</h1>}/>



        Termscondition
      </Routes>
    </div>
  )
}
