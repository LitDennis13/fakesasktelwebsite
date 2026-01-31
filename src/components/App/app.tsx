import { Outlet } from 'react-router-dom';

import NavigationBar from '../NavigationBar/navigationBar';

import styles from "./app.module.css"

function App() {
    return <div className={styles.appMain}>
        <div className={styles.navigationBarArea}>
            <NavigationBar />
        </div>
        <div className={styles.mainContent}>
            <Outlet />
        </div>
        
    </div>;
}

export default App
