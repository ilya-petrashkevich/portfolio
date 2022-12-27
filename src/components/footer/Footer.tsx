import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";
const Footer = () => {
    return (
        <div className={style.footerBlock}>

            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Иван Иванов</h2>

                <div className={style.picsContainer}>
                    <div className={style.pic}></div>
                    <div className={style.pic}></div>
                    <div className={style.pic}></div>
                    <div className={style.pic}></div>
                </div>

                <h3 className={style.title}>&#169; 2022 Все права защищены.</h3>
            </div>

        </div>
    );
};

export default Footer;