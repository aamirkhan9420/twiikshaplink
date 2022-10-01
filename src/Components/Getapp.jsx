import { Text } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import style from "./Navbar.module.css"
import Top from './Top'

export default function Getapp() {
  return (

    <div className={style.Getapp}>
      <Navbar />
      <Top className={style.Getapp_div1} />
      <div>
        <div className={style.Getapp_div2}>
          <div className={style.Getapp_div2_div1}>

            <img src=" https://kcdn.twiikapp.com/images/gettheapp.png" alt="" />
          </div>
          <div className={style.Getapp_div2_div2}>

            <Text fontSize={{ base: '16px', md: '20px', lg: '25px' }} className={style.Getapp_div2_div2_text}>
              DOWNLOAD TWIIK TODAY
            </Text>
            <hr className={style.blueline} />

            <Text fontSize={{ base: '10px', md: '12px', lg: '14px' }} className={style.Getapp_div2_div2_para} >
              As a member you will be able to log all your workouts, track results, follow programs and challenge friends and join groups.
            </Text>
            <div className={style.appstore}>
              <a href="https://itunes.apple.com/se/app/twiik/id1022318229?ls=1&amp;mt=8">
                <img src="https://kcdn.twiikapp.com/images/language/en/appstore_button.png" alt="Appstore_button" />
              </a>
              &nbsp;
              <a href="https://play.google.com/store/apps/details?id=me.twiik.twiikapp" ><img src="https://kcdn.twiikapp.com/images/language/en/googleplay_button.png" alt="Googleplay_button" />

              </a>

            </div>

          </div>

        </div>

      </div>
      <Footer />
    </div>
  )
}
