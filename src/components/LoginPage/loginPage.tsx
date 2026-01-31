import styles from "./loginPage.module.css";

import { Link } from "react-router-dom"

function LoginPage() {
    return (
        <div className={styles.loginPage}>
            <header className={styles.topBar}>
                <Link to={"/"}>
                <img
                    src="https://www.sasktel.com/assets/img/Header/LogoDark.svg"
                    alt="SaskTel"
                    className={styles.logo}
                />
                </Link>
            </header>
            <main className={styles.mainContent}>
                <div className={styles.brand}>
                    <span className={styles.brandMy}>my</span>
                    <span className={styles.brandSasktel}>SASKTEL</span>
                </div>
                <div className={styles.panels}>
                    <section className={styles.loginPanel}>
                        <h2>Log in</h2>
                        <label className={styles.label} htmlFor="login-email">
                            EMAIL OR USERNAME
                        </label>
                        <input
                            id="login-email"
                            type="text"
                            className={styles.input}
                        />
                        <label className={styles.label} htmlFor="login-password">
                            PASSWORD
                        </label>
                        <div className={styles.passwordField}>
                            <input
                                id="login-password"
                                type="password"
                                className={styles.input}
                            />
                            <button className={styles.eyeButton} aria-label="Show password" type="button">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 5C6.5 5 2 9.5 1 12c1 2.5 5.5 7 11 7s10-4.5 11-7c-1-2.5-5.5-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                                </svg>
                            </button>
                        </div>
                        <label className={styles.rememberRow}>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <Link to={"/MyPortal"}>
                        <button className={styles.primaryButton} type="button">
                            LOG IN
                        </button>
                        </Link>
                        <p className={styles.forgotLine}>
                            Forgot your <span>username</span> or <span>password</span>?
                        </p>
                    </section>
                    <div className={styles.divider} aria-hidden="true" />
                    <section className={styles.registerPanel}>
                        <h2>Not registered?</h2>
                        <ul className={styles.benefitsList}>
                            <li>View and pay your SaskTel eBILL</li>
                            <li>Change your SaskTel passwords and account settings</li>
                            <li>Upgrade your current devices and services</li>
                            <li>Check your data usage</li>
                            <li>Watch your maxTV GO Apps anywhere</li>
                        </ul>
                        <button className={styles.secondaryButton} type="button">
                            REGISTER
                        </button>
                        <p className={styles.learnMore}>Learn more about mySASKTEL</p>
                    </section>
                </div>
            </main>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <Link to={"/"}>
                        <img src="https://www.sasktel.com/assets/img/Header/LogoDark.svg" alt="" />
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default LoginPage;
