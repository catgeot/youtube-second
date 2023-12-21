import React from 'react'

import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className="header_logo">
                <a href="/">
                    <em aria-hidden='true'></em>
                    <span>catgeot<br />youtube</span>
                </a>
            </h1>
            <nav className="header_menu">
                <ul className='menu'>
                    <li className='active'>
                        <a href="/"><CiBaseball /> catgeot</a>                    
                    </li>
                    <li>
                        <a href="/today"><CiMoneyBill /> 추천영상</a>                    
                    </li>
                    <li>
                        <a href="/developer"><CiCoins1 /> 추천 개발자</a>                    
                    </li>
                    <li>
                        <a href="/webd"><CiBoxes /> 웹디자인 기능사</a>                    
                    </li>
                    <li>
                        <a href="/website"> <CiBullhorn /> 웹표준 사이트</a>                    
                    </li>
                    <li>
                        <a href="/gsap"><CiCoffeeCup /> GSAP</a>                    
                    </li>
                    <li>
                        <a href="/port"><CiDumbbell /> 포트폴리오 사이트</a>                    
                    </li>
                    <li>
                        <a href="/youtube"><CiFries /> 유튜브 클론 사이트</a>                    
                    </li>                                            
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href="/search/catgeot">catgeot</a>
                    </li>
                    <li>
                        <a href="/search/html">html</a>
                    </li>
                    <li>
                        <a href="/search/css">css</a>
                    </li>
                    <li>
                        <a href="/search/javaScript">javaScript</a>
                    </li>
                    <li>
                        <a href="/search/react.js">react.js</a>
                    </li>
                    <li>
                        <a href="/search/Vue.js">Vue.js</a>
                    </li>
                    <li>
                        <a href="/search/Next.js">Next.js</a>
                    </li>
                    <li>
                        <a href="/search/Node.js">Node.js</a>
                    </li>
                    <li>
                        <a href="/search/Sql">Sql</a>
                    </li>
                    <li>
                        <a href="/search/Portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="/search/Music">Music</a>
                    </li>
                </ul>                
            </nav>
            <div className="header_sns">
                <ul>
                    <li>
                        <a href="http://github.com/catgeot" rel='noopener noreferrer'></a>
                        <AiFillGithub />
                    </li>
                    <li>
                        <a href=""></a>
                        <AiFillYoutube />
                    </li>
                    <li>
                        <a href=""></a>
                        <AiOutlineCodepen />
                    </li>
                    <li>
                        <a href=""></a>
                        <AiOutlineInstagram />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
