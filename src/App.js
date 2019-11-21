import React from 'react';
import logo from './logo.svg';
import Sidebar from "./Components/Sidebar/Sidebar";
import styles from  './App.module.scss';
import Tools from "./Components/Tools/Tools";
import {Route} from "react-router-dom";
import Favorites from "./Components/Favorites/Favorites";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>

        <div className={styles.sidebar}>
          <Sidebar/>
        </div>

        <div className={styles.content}>
          <Route path="/tools" render={() => <Tools/>}/>
          <Route path="/favorites" render={() => <Favorites/>}/>
        </div>
      </div>

      <div className={styles.footer}>
        <div>lorem</div>
        <div>Lorem ipsum.</div>
        <div>Lorem ipsum dolor sit.</div>
      </div>
    </div>
  );
}

export default App;
