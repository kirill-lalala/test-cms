import React from 'react';
import styles from '../Tools/Tools.module.scss';
import {NavLink} from "react-router-dom";

const Crm = ({name='', img='', rate=0, partnersCount=0, projectsCount=0, code=0}) => {
    return (
        <tr className={styles.table__row}>
            <td className={styles.table__cell}><NavLink to={`/instruments/${code}`}>{name}</NavLink></td>
            <td className={styles.table__cell}>{projectsCount} проекта</td>
            <td className={styles.table__cell}>{partnersCount} партнеров</td>
            <td className={styles.table__cell}>{rate}</td>
            <td className={styles.table__cell}><input type="checkbox"/></td>
        </tr>
    );
};

export default Crm;
