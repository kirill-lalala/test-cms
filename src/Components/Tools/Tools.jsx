import React, {useState} from 'react';
import styles from './Tools.module.scss';
import {connect} from "react-redux";
import {changeSortParams, getData} from "../../redux/reducers/tools-reducer";
import Cms from "../Сms/Cms";

class Tools extends React.Component {

    // const [direction, setDirection] = useState('desc');
    changeSortParams = (sortBy, direction) => {
        return this.props.getData(null, sortBy, direction);
    };

    changePage = page => {
        return this.props.getData(page, this.props.sortBy, this.props.direction);
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
                            <th className={`${styles.table__cell} ${styles.table__cell_sortElement}`}
                                onClick={() => this.changeSortParams('partners_count', !this.props.direction)}>партнеры</th>
                            <th className={`${styles.table__cell} ${styles.table__cell_sortElement}`}
                                onClick={() => this.changeSortParams('rate', !this.props.direction)}>оценка пользователей</th>
                            <th className={styles.table__cell}>сравнить</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.cmsSystems &&
                        this.props.cmsSystems.map(c => {
                                return <Cms key={c.id} {...c} isToolsComponent={true}/>
                        })
                    }
                    </tbody>
                </table>

                <div>
                    <div style={{width: "max-content", margin: "0 auto"}}>
                        <button onClick={() => this.changePage(this.props.firstPage)} disabled={!this.props.prevPage}> {'<<'} </button>
                        <button onClick={() => this.changePage(this.props.prevPage)} disabled={!this.props.prevPage}> {'<'} </button>
                        <span>{this.props.current_page}</span>
                        <button onClick={() => this.changePage(this.props.nextPage)} disabled={!this.props.nextPage}> {'>'} </button>
                        <button onClick={() => this.changePage(this.props.lastPage)} disabled={!this.props.nextPage}> {'>>'} </button>
                    </div>
                </div>
            </div>
        );
    }

}

let mapStateToProps = (state) => {
    return {
        current_page: state.toolsPage.current_page, cmsSystems: state.toolsPage.data, direction: state.toolsPage.direction,
        nextPage: state.toolsPage.next_page_url, prevPage: state.toolsPage.prev_page_url, lastPage: state.toolsPage.last_page_url,
        firstPage: state.toolsPage.first_page_url, sortBy: state.toolsPage.sortBy
    }
};

export default connect(mapStateToProps, {
    getData, changeSortParams
})(Tools);
