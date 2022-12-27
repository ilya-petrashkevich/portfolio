import React from 'react';
import Nav from "../nav/Nav";
import styleContainer from "../common/styles/Container.module.css";
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <div className={`${styleContainer.container} ${style.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    );
};

export default Header;