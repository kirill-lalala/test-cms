import React from 'react';
import styles from './Tools.module.scss';
import {connect} from "react-redux";
import {changeSortParams, getDataSuccess} from "../../redux/reducers/tools-reducer";
import Cms from "../Сms/Cms";

class Tools extends React.Component {

    works_count = 'works_count';
    partners_count = 'partners_count';
    rate = 'rate';

    state = {
        'partners_count': true,
        'works_count': true,
        'rate': true
    };

    componentDidMount() {
        this.props.getDataSuccess();
    }

    changeSortParams = (sortBy, direction) => {
        this.setState({ [sortBy]: !direction} );
        return this.props.getDataSuccess(null, sortBy, direction);
    };

    changePage = page => {
        return this.props.getDataSuccess(page, this.props.toolsData.sortBy, this.props.toolsData.direction);
    };



    render(){
        const {first_page_url: firstPage,  prev_page_url: prevPage,
                current_page, next_page_url: nextPage, last_page_url: lastPage} = this.props.toolsData;

        return (
            <div className={styles.tools}>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.table__row}>
                            <th className={`${styles.table__cell} ${styles.table__cell_th}`}>название</th>
                            <th className={`${styles.table__cell} ${styles.table__cell_th} ${styles.table__cell_sortElement}` }
                                onClick={() => this.changeSortParams(this.works_count, this.state.works_count)}>
                                проекты
                                <span className={`${styles.triangle} ${!this.state.works_count && styles.triangle_rotate}`}/>
                            </th>
                            <th className={`${styles.table__cell} ${styles.table__cell_th} ${styles.table__cell_sortElement}`}
                                onClick={() => this.changeSortParams(this.partners_count, this.state.partners_count)}>
                                партнеры
                                <span className={`${styles.triangle} ${!this.state.partners_count && styles.triangle_rotate}`}/>
                            </th>
                            <th className={`${styles.table__cell} ${styles.table__cell_th} ${styles.table__cell_sortElement}`}
                                onClick={() => this.changeSortParams(this.rate, this.state.rate)}>
                                оценка пользователей
                                <span className={`${styles.triangle} ${!this.state.rate && styles.triangle_rotate}`}/>
                            </th>
                            <th className={`${styles.table__cell} ${styles.table__cell_th}`}>сравнить</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.toolsData.data &&
                        this.props.toolsData.data.map(c =>  <Cms key={c.id} {...c} isToolsComponent={true}/>)
                    }
                    </tbody>
                </table>

                <div>
                    <div style={{width: "max-content", margin: "0 auto"}}>
                        <button onClick={() => this.changePage(firstPage)} disabled={!prevPage} className="btn btn-arrow"> {'<<'} </button>
                        <button onClick={() => this.changePage(prevPage)} disabled={!prevPage} className="btn btn-arrow"> {'<'} </button>
                        <span>{current_page}</span>
                        <button onClick={() => this.changePage(nextPage)} disabled={!nextPage} className="btn btn-arrow"> {'>'} </button>
                        <button onClick={() => this.changePage(lastPage)} disabled={!lastPage} className="btn btn-arrow"> {'>>'} </button>
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = state => ({ toolsData: state.toolsPage });

export default connect(mapStateToProps, { getDataSuccess, changeSortParams })(Tools);