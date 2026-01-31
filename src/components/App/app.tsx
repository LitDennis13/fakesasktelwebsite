import { Outlet } from 'react-router-dom';

import styles from "./app.module.css"

function App() {
    return <div className={styles.appMain}>
        <div className={styles.mainContent}>
            <Outlet />
        </div>
        
    </div>;
}

export default App
