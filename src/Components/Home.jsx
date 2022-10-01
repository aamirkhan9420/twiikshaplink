import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import ButtonComponent from './ButtonComponent'
import Footer from './Footer'
import Navbar from './Navbar'

import style from "./Navbar.module.css"

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={style.Home}>
        <div className={style.starterimg}>
          <img src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/151090280_1927030740769068_164826389087032641_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9267fe&_nc_ohc=o0jMmGDNfVsAX-krKgw&_nc_ht=scontent-bom1-1.xx&oh=00_AT8G5V-BF3YirufR_13FGkG2J-C9_DQji6ANLah87sPNGA&oe=632D3F76" alt="" />

        </div>

        <div className={style.Home_div2}>

          <div className={style.Home_div2para}>
            <Text color={"white"} fontFamily="lato-bold" fontSize={{ base: '30px', md: '36px', lg: '40px' }}>
              The personal coach in your pocket.
              <br />
              When, where and how you want.
            </Text>
            <Text color={"white"} fontWeight="200" fontSize={{ base: '18px', md: '20px', lg: '25px' }}>
              As a member you can log your workouts in your workout log directly in the app. Follow your results, get individual results, personal coaching and statistics.
            </Text>
            <Link to="/createaccount">
              <ButtonComponent id={style.creataccountbtn} />
            </Link>
          </div>



          <div className={style.whatistwiik}>
            <div className={style.whatistwiikdiv1}>

              <Text className={style.whatis_twiik_heading} fontWeight="700" fontSize={{ base: '18px', md: '20px', lg: '35px' }}>
                What is Twiik?
              </Text>
              <hr className={style.blueline} />
              <Text color={"black"} fontWeight="700" >
                Twiik App is a digital fitness log and coach that's always with you. As a member you can log your workouts, track results, follow programs, boost and challenge friends and join social groups for motivation.
              </Text>
            </div>
            <div className={style.whatistwiikdiv2}>
              <img src="https://kcdn.twiikapp.com/images/startpage_twiik_app.png" alt="" />
            </div>

          </div>

        </div>
        <div className={style.keep_track_habits} >
          <div className={style.keep_track_habitsimg}>
            <img src="https://kcdn.twiikapp.com/images/startpage_stats.png" alt="" />
          </div>
          <div className={style.keep_track_habitspara}>
            <h2>
              <span>Keep track of your habits with our workout log</span>
            </h2>
            <hr className={style.blueline} />

            <ul>
              <li>Your own digital fitness log</li>
              <li>Log all types of activities</li>
              <li>Follow your results and keep track of your progress and habits</li>
            </ul>
          </div>

        </div>

      </div>
      <Footer id={style.HomeFooter} />
    </div>
  )
}
//     font-size: 36px;
// font-family: lato-bold
// color: #fff;