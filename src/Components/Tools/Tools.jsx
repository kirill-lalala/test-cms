import React from 'react';
import Crm from "../Сrm/Crm";
import styles from './Tools.module.scss';

const Tools = props => {
    return (
        <div className={styles.tools}>
            <table className={styles.table}>
                <tr className={styles.table__row}>
                    <th className={styles.table__cell}>название</th>
                    <th className={styles.table__cell}>проекты</th>
                    <th className={styles.table__cell}>партнеры</th>
                    <th className={styles.table__cell}>оценка пользователей</th>
                    <th className={styles.table__cell}>сравнить</th>
                </tr>

                <Crm/>

            </table>
        </div>
    );
};

export default Tools;
