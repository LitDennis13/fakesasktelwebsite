import { Link, useLocation } from "react-router-dom"
import styles from "./navigationBar.module.css"
import { useEffect, useState } from "react";

function NavigationBar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const location = useLocation();
    console.log(location);
    useEffect(() => {
        if (location.pathname == "/MyPortal") {
            setLoggedIn(true);
        }
        else {
            setLoggedIn(false);
        }
        console.log("changes");
    }, [location]);


    return <div className={styles.navigationBarMain}>
        <div className={styles.sectionOne}>
            <button>Personal</button>
            <button>Business</button>
        </div>
        <div className={styles.sectionTwo}>
            <input type="text" placeholder="What are you looking for?"/>
            <svg width="16" height="16" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path fill="#aaaaaa" d="M15.781 13.834l-3.116-3.116c-0.141-0.141-0.331-0.219-0.531-0.219h-0.509c0.863-1.103 1.375-2.491 1.375-4 0-3.591-2.909-6.5-6.5-6.5s-6.5 2.909-6.5 6.5 2.909 6.5 6.5 6.5c1.509 0 2.897-0.512 4-1.375v0.509c0 0.2 0.078 0.391 0.219 0.531l3.116 3.116c0.294 0.294 0.769 0.294 1.059 0l0.884-0.884c0.294-0.294 0.294-0.769 0.003-1.063zM6.5 10.5c-2.209 0-4-1.787-4-4 0-2.209 1.787-4 4-4 2.209 0 4 1.787 4 4 0 2.209-1.787 4-4 4z">
              </path>
            </svg>
        </div>
        <div className={styles.sectionThree}>
            <button>
                <img src="https://www.sasktel.com/assets/img/Header/Location.svg" alt="" />
                LOCATION
            </button>
            <button>
                <img src="https://www.sasktel.com/assets/img/Header/Support.svg" alt="" />
                SUPPORT
            </button>
            <button>
                <img src="https://www.sasktel.com/assets/img/Header/Email.svg" alt="" />
                SASKTEL.NET
            </button>
            <button>
                <img src="https://www.sasktel.com/assets/img/Header/Cart.svg" alt="" />
                CART
            </button>
            <Link to={"/LoginPage"}>
                <button>
                    <img src="https://www.sasktel.com/assets/img/my-sasktel.svg" alt="" />
                    LOG {loggedIn ? "OUT" : "IN"}
                </button>
            </Link>
            
        </div>
    </div>
}

export default NavigationBar;