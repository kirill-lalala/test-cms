import React from 'react';
import {connect} from "react-redux";
import styles from "../Tools/Tools.module.scss";
import Cms from "../Сms/Cms";

const Favorites = props => {

    return (
        <div>
            <table className={styles.table}>
                <tbody>
                    {props.selectedCmsSystems.map(c => <Cms {...c} key={c.id} isFavoritesComponent={true}/>)}
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        selectedCmsSystems: state.favoritePage.selectedCmsSystems
    }
};

export default connect(mapStateToProps, {})(Favorites);
