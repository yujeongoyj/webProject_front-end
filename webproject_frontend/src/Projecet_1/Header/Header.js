import React from "react";
import './Header.css'


function Header() {
    return(
        <div className="header">
            <div className="headertwo">

                <div className="header_navbar">

                <img className="header_logo" src="https://www.daelim.ac.kr/type/KOR_A/img/intro/logo.png"/>

                <nav className="header_navbar">

                    <ul className="header_ul">
                        <li className="header_li">
                            <a className="header_a" href="">중고거래</a>
                        </li>
                            
                        <li className="header_li">
                            <a className="header_a" href="">대학 내 거래</a>
                        </li>
                        
                        <li className="header_li">
                            <a className="header_a" href="">부동산 직거래</a>
                        </li>

                        <li className="header_li">
                            <a className="header_a" href="">중고차 직거래</a>
                        </li>
                     </ul>
                    </nav>

                <div className="navbar_search">
                    <form className="navbar_searchtwo">
                        <input className="search" type="text" placeholder="물품을 검색해보세요"/>
                    </form>
                </div>
            </div>
            </div>
        </div>

    );
}

export default Header;