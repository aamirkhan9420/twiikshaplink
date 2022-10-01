import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Navbar.module.css"
import Twiiklogo from './Twiiklogo'

export default function Footer({id}) {
    return (
        <div className={style.Footer} id={id}>
            <div className={style.Footerdiv1}>
                <div className={style.Footer_div1_Chiled1}>
                    <Twiiklogo className={style.Twiiklogofooter} />
                    <Text color={"#bbb"} marginTop={"10px"} fontSize={{ base: '8px', md: '10px', lg: '12px' }}>
                        All rights reserved ©  2002 -  2022
                    </Text>
                    <Text color={"#bbb"} fontSize={{ base: '10px', md: '12px', lg: '14px' }}>
                        Developed by Wellnesstech Labs International AB
                    </Text>
                    <Text marginTop={"10px"} color={"white"} fontSize={{ base: '10px', md: '12px', lg: '14px' }}>
                        <Link to="/contact">Contact Us</Link>
                        &nbsp;·&nbsp;

                        <Link to="/termscondition">Terms &amp; Conditions</Link>
                    </Text>
                </div>
                <div className={style.Footer_div1_Chiled2} >
                    <div>
                        <a href="https://www.facebook.com/twiikme/"><img src="facebook.png" alt="icon" /></a>

                    </div>
                    <div>
                        <a href="https://www.instagram.com/twiik.me/"> <img src="insta.png" alt="icon" /></a>

                    </div>
                    <div>
                        <a href="https://www.linkedin.com/company/twiik/"><img src="linkedin.png" alt="icon" /></a>

                    </div>
                    <div>

                        <a href="https://itunes.apple.com/se/app/twiik/id1022318229?ls=1&amp;mt=8"><img src="apple.png" alt="icon" /></a>
                    </div>
                    <div>
                        <a href="https://play.google.com/store/apps/details?id=me.twiik.twiikapp"><img src="android.png" alt="icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
