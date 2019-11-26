import React, {useState} from 'react';
import styles from '../Tools/Tools.module.scss';
import {connect} from "react-redux";
import {addCms, removeCms} from "../../redux/reducers/favorites-reducer";
import {NavLink} from "react-router-dom";
import {changeChecked} from "../../redux/reducers/tools-reducer";

const Cms = ({addCms, removeCms, changeChecked, checked, ...props }) => {

    const onCheckedClick = (value, props, id) => {
        changeChecked(checked, id);
        if(value) {
            addCms(props);
        }else{
            removeCms(id);
        }
    };

    return (
        <tr className={styles.table__row}>
            <td className={styles.table__cell}><NavLink to={`/instruments/${props.code}`}>{props.title}</NavLink></td>
            <td className={styles.table__cell}>{props.worksCount} проекта</td>
            <td className={styles.table__cell}>{props.partnersCount || 0} партнеров</td>
            <td className={styles.table__cell}>{props.rate}</td>

            {props.isToolsComponent && <td className={styles.table__cell}><input checked={checked} onChange={() => onCheckedClick(!checked, props, props.id)} type="checkbox"/></td>}
            {props.isFavoritesComponent && <td className={styles.table__cell}> <button>Удалить</button></td>}
        </tr>
    );
};

const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps, {
    addCms, removeCms, changeChecked
})(Cms);
