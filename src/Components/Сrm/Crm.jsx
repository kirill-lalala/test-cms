import React from 'react';
import styles from '../Tools/Tools.module.scss';

const Crm = props => {
    return (
        <tr className={styles.table__row}>
            <td className={styles.table__cell}>Битрикс</td>
            <td className={styles.table__cell}>13 343 проекта</td>
            <td className={styles.table__cell}>95 партнеров</td>
            <td className={styles.table__cell}>4.4</td>
            <td className={styles.table__cell}><input type="checkbox"/></td>
        </tr>
    );
};

export default Crm;
