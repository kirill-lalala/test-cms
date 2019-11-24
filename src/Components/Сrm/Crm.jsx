import React, {useState} from 'react';
import styles from '../Tools/Tools.module.scss';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {addCrm} from "../../redux/reducers/favorites-reducer";

const Crm = ({addCrm, ...props }) => {
    debugger;
    const [checked, setChecked] = useState(false);

    const onCheckedClick = (value, props) => {
        setChecked(value);
        if(value) {
            addCrm(props);
        }
    };

    return (
        <tr className={styles.table__row}>
            <td className={styles.table__cell}><NavLink to={`/instruments/${props.code}`}>{props.title}</NavLink></td>
            <td className={styles.table__cell}>{props.worksCount} проекта</td>
            <td className={styles.table__cell}>{props.partnersCount} партнеров</td>
            <td className={styles.table__cell}>{props.rate}</td>

            {props.isToolsComponent && <td className={styles.table__cell}><input checked={checked} onChange={() => onCheckedClick(!checked, props)} type="checkbox"/></td>}
            {props.isFavoritesComponent && <td className={styles.table__cell}> <button>Удалить</button></td>}
        </tr>
    );
};

export default connect(null, {
    addCrm
})(Crm);
