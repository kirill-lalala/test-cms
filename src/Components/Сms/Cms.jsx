import React from 'react';
import styles from '../Tools/Tools.module.scss';
import {connect} from "react-redux";
import {saveCms} from "../../redux/reducers/favorites-reducer";
import {NavLink} from "react-router-dom";
import {changeChecked} from "../../redux/reducers/tools-reducer";

const Cms = ({saveCms, changeChecked, checked, renderCheckbox, renderButton, ...props }) => {

    const onCheckedClick = (value, props, id) => {
        changeChecked(checked, id);
        value ? saveCms(props): saveCms(id);
    };

    return (
        <tr className={styles.table__row}>
            <td className={styles.table__cell}>
                    {
                        props.isSponsor && <div className={styles.sponsor}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Red_star.svg" alt=""/>
                        </div>
                    }

                <div className={styles.image}>
                    {props.image ? <img src={props.image} alt=""/> : props.firstLettersOfName}
                </div>

                <div className={styles.text}>
                    <NavLink to={`/instruments/${props.code}`} className={styles.cmsTitle}>
                        <p>{props.title}</p>
                    </NavLink>
                    { props.isSponsor && <a href={props.url} target="_blank" rel="noopener noreferrer">{props.shortUrl}</a> }
                </div>
            </td>
            <td className={styles.table__cell}>{props.worksCount} проекта</td>
            <td className={styles.table__cell}>{props.partnersCount || 0} партнеров</td>
            <td className={styles.table__cell}>{props.rate}</td>

            {
                renderCheckbox &&
                    <td className={styles.table__cell}>
                        <input id={props.id} checked={checked} onChange={() => onCheckedClick(!checked, props, props.id)} type="checkbox"/>
                        <label htmlFor={props.id} className={styles.table__cell_checked}/>
                    </td>
            }
            {renderButton && <td className={styles.table__cell}> <button onClick={() => saveCms(props.id)}>Удалить</button></td>}
        </tr>
    );
};

const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps, {
    saveCms, changeChecked
})(Cms);
