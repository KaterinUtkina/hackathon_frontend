import React, { Component }  from 'react';
import stl from './Header.module.css';
import logo from '../image/rosneft-logo.svg';
import header_img_left from '../image/header_img/image_left.png';
import header_img_right from '../image/header_img/image_right.png';

class Header extends React.Component {
    render() {
        return (
            <header className={stl.header}>
                <img src={header_img_left} className={stl.header_img_left} alt=""/>
                <div className={stl.header_content}>
                    <img src={logo} alt='logo-rosneft' className={stl.header_content_logo}/>
                    <div className={stl.header_container_navbar}>
                        <img src={header_img_right} className={stl.header_img_right} alt=""/>
                        <nav className={stl.navbar}>
                            <a href='#' className={stl.navbar_item}>Главная</a>
                            <a href='#' className={stl.navbar_item}>Организаторы</a>
                            <a href='#' className={stl.navbar_item}>Правила</a>
                            <a href='#' className={stl.navbar_item}>#ПульсМарафон</a>
                            <a href='#' className={stl.navbar_item}>rn.digital</a>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default  Header;

