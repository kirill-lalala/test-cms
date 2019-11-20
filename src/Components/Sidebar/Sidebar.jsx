import React from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = props => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <div className={styles.logo__redText}>CMS</div>
                <div className={styles.logo__text}>
                    <div className={styles.logo__magazine}>magazine</div>
                    <div className={styles.logo__aboutDigital}>Все о digital</div>
                </div>
            </div>

            <hr/>

            <div className={styles.navigation}>
                <ul>
                    <li className={styles.navigation__item}><a href="">журнал</a></li>
                    <li className={styles.navigation__item}><a href="">агентсва</a></li>
                    <li className={styles.navigation__item}><a href="">инструменты</a></li>
                </ul>
            </div>

            <hr/>

            <div className={styles.services}>
                <ul>
                    <li className={styles.services__item}><a href="">Избранное</a></li>
                    <li className={styles.services__item}><a href="">Поиск</a></li>
                    <li className={styles.services__item}><a href="">Кабинет агенства</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
