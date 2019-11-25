import React from 'react';
import {connect} from "react-redux";
import styles from "../Tools/Tools.module.scss";
import Crm from "../Сrm/Crm";

const Favorites = props => {
    return (
        <div>
            <table className={styles.table}>
                {props.selectedCrmSystems.map(s => <Crm key={s.id} title={s.title}
                                                        img={s.img} rate={s.rate}
                                                        partnersCount={s.partnersCount}
                                                        worksCount={s.worksCount}
                                                        code={s.code}
                                                        isFavoritesComponent={true}/>)}
            </table>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        selectedCrmSystems: state.favoritePage.selectedCrmSystems
    }
};

export default connect(mapStateToProps, {

})(Favorites);
