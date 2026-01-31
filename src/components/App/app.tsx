import { Outlet, useLocation } from 'react-router-dom';

import NavigationBar from '../NavigationBar/navigationBar';

import styles from "./app.module.css"
import { useEffect, useState } from 'react';

function App() {
    const [showURL, setShowURL] = useState(true);
    const location = useLocation();
    console.log(location);
    useEffect(() => {
        if (location.pathname == "/LoginPage") {
            setShowURL(false);
        }
        else {
            setShowURL(true);
        }
        console.log("changes");
    }, [location]);

    return <div className={styles.appMain}>
        {
            showURL ? <>
                        <div className={styles.navigationBarArea}>
                            <NavigationBar />
                        </div>
                        <div className={styles.mainContent}>
                            <Outlet />
                        </div>
                    </>
        : 
        <div className={styles.mainContent2}>
            <Outlet />
        </div> 

        }

        
        
    </div>;
}

export default App
