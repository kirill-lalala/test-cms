import React from 'react';
import Crm from "../Сrm/Crm";
import styles from './Tools.module.scss';
import {connect} from "react-redux";
import {changeSortParams, getData} from "../../redux/reducers/tools-reducer";

class Tools extends React.Component {

    changeSortParams = (sortBy, direction) => {
        return this.props.getData(sortBy, direction);
    };
    componentDidMount() {
        this.props.getData();
    }

    render(){
        return (
            <div className={styles.tools}>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.table__row}>
                            <th className={styles.table__cell}>название</th>
                            <th className={`${styles.table__cell} ${styles.table__cell_sortElement}` }
                                onClick={() => this.changeSortParams('works_count', !this.props.direction)}>проекты</th>
                            <th className={`${styles.table__cell} ${styles.table__cell_sortElement}`}>партнеры</th>
                            <th className={`${styles.table__cell} ${styles.table__cell_sortElement}`}>оценка пользователей</th>
                            <th className={styles.table__cell}>сравнить</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.crmSystems &&
                        this.props.crmSystems.map(crm => {
                                return <Crm key={crm.id} name={crm.title}
                                            img={crm.image} rate={crm.rate}
                                            partnersCount={crm.partnersCount}
                                            projectsCount={crm.worksCount}
                                            code={crm.code}/>
                        })
                    }
                    </tbody>
                </table>

                <div>
                    <div style={{width: "100px", margin: "0 auto"}}>
                        <span> {'<'} </span>
                        <span>1</span>
                        <span onClick={1}> {'>'} </span>
                    </div>
                </div>
            </div>
        );
    }

}

let mapStateToProps = (state) => {
    debugger;
    return {
        crmSystems: state.toolsPage.data.data,
        direction: state.toolsPage.direction
    }
};

export default connect(mapStateToProps, {
    getData, changeSortParams
})(Tools);
