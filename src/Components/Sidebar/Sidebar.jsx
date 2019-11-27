import React from 'react';
import styles from './Sidebar.module.scss';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Sidebar = ({favoriteCount}) => {
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
                    <li className={styles.navigation__item}><NavLink to="">журнал</NavLink></li>
                    <li className={styles.navigation__item}><NavLink to="">агентсва</NavLink></li>
                    <li className={styles.navigation__item}><NavLink to="/instruments" activeClassName={styles.activeLink}>инструменты</NavLink></li>
                </ul>
            </div>

            <hr/>

            <div className={styles.services}>
                <ul>
                    <li className={`${styles.services__item} ${styles.favoriteLink}`}>
                        <NavLink to="/favorites"  activeClassName={styles.activeLink}>Избранное</NavLink>
                        <span className={favoriteCount && 'dBlock'}>{favoriteCount}</span>
                    </li>
                    <li className={styles.services__item}><NavLink to="">Поиск</NavLink></li>
                    <li className={styles.services__item}><NavLink to="">Кабинет агенства</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        favoriteCount: state.favoritePage.selectedCmsSystems.length
    }
};

export default connect(mapStateToProps, null)(Sidebar);