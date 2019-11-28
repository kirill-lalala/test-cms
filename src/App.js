import React, {useEffect} from 'react';
import Sidebar from "./Components/Sidebar/Sidebar";
import styles from  './App.module.scss';
import Tools from "./Components/Tools/Tools";
import {Route} from "react-router-dom";
import Favorites from "./Components/Favorites/Favorites";
import {connect} from "react-redux";
import {restoreFavoriteCms} from "./redux/reducers/favorites-reducer";
import Footer from "./Components/Footer/Footer";

function App({ restoreFavoriteCms}) {

    useEffect(()=>{
        restoreFavoriteCms();
    }, [restoreFavoriteCms]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>

                <div className={styles.sidebar}>
                    <Sidebar/>
                </div>

                <div className={styles.content}>
                    <Route path="/instruments" render={() => <Tools/>}/>
                    <Route path="/favorites" render={() => <Favorites/>}/>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default connect(null, {
    restoreFavoriteCms
})(App);
