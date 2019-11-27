import React from 'react';
import styles from "./Footer.module.scss";

const Footer = props => {
    return (
        <div className={styles.footer}>
            <div className={styles.wrap}>
                <div className={styles.block}>
                    <ul>
                        <li>журнал</li>
                        <li>Статьи</li>
                        <li>Блоги</li>
                        <li>Кейсы</li>
                        <li>Исследования</li>
                        <li>Новости</li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <ul>
                        <li>АГЕНТСТВА</li>
                        <li>Веб-студии</li>
                        <li>SEO-компании</li>
                        <li>Агентства контекстной рекламы</li>
                        <li>Мобильные разработчики</li>
                        <li>SMM/PR-агентства</li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <ul>
                        <li>ИНСТРУМЕНТЫ</li>
                        <li>CMS</li>
                        <li>CRM-системы</li>
                        <li>Хостинговые компании</li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <ul>
                        <li>ИНФОРМАЦИЯ</li>
                        <li>О проекте</li>
                        <li>Рекламные форматы</li>
                        <li>Обратная связь</li>
                        <li>Спецпроекты</li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <ul>
                        <li>МЫ НА СВЯЗИ</li>
                        <li className={styles.block__soc}>
                            <a href="/">F</a>
                            <a href="/">T</a>
                            <a href="/">V</a>
                        </li>
                        <li><button className="btn">Написать нам</button></li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <ul>
                        <li>РАССЫЛКА</li>
                        <li><button className="btn">Подписаться</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
