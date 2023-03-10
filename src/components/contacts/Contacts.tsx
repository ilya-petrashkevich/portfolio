import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";
const Contacts = () => {
    return (
        <div className={style.contactsBlock}>

            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>

                <form action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" ></textarea>
                </form>

                <button className={style.showBtn}>Отправить</button>
            </div>

        </div>
    );
};

export default Contacts;