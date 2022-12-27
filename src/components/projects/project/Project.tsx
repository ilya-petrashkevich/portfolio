import React from 'react';
import style from './Project.module.css';

const Project = () => {
    return (
        <div className={style.project}>
            <div className={style.projectImgContainer}>
                <button className={style.showBtn}>Смотреть</button>
            </div>
            <div className={style.projectInfo}>
                <span className={style.title}>Название проекта</span>
                <p className={style.description}>Краткое описание</p>
            </div>
        </div>
    );
};

export default Project;