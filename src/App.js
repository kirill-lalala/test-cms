import React from 'react';
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
          <Route path="/instruments" render={() => <Tools/>}/>
          <Route path="/favorites" render={() => <Favorites/>}/>
        </div>
      </div>

      <div className={styles.footer} style={{display: "flex", justifyContent: "center", padding:"10px"}}>
        FOOTER DATA
      </div>
    </div>
  );
}

export default App;
