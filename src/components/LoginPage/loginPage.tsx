import styles from "./loginPage.module.css"

function LoginPage() {
    return <>
        <div className={styles.loginPage}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <span className={styles.logoText}>SaskTel</span>
                    <span className={styles.logoMark} aria-hidden="true"></span>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.brand}>
                    <span className={styles.brandMy}>my</span>
                    <span className={styles.brandSasktel}>SASKTEL</span>
                </div>

                <section className={styles.panel}>
                    <div className={styles.loginColumn}>
                        <h2>Log in</h2>
                        <form className={styles.form}>
                            <label className={styles.field}>
                                <span>Email or username</span>
                                <input type="text" />
                            </label>
                            <label className={styles.field}>
                                <span>Password</span>
                                <div className={styles.passwordField}>
                                    <input type="password" />
                                    <span className={styles.eyeIcon} aria-hidden="true">
                                        <svg width="18" height="12" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 0C5.019 0 1.592 2.484.183 6 1.592 9.516 5.019 12 9 12s7.408-2.484 8.817-6C16.408 2.484 12.981 0 9 0zm0 10.125A4.125 4.125 0 0 1 4.875 6 4.125 4.125 0 0 1 9 1.875 4.125 4.125 0 0 1 13.125 6 4.125 4.125 0 0 1 9 10.125zm0-6.75A2.625 2.625 0 0 0 6.375 6 2.625 2.625 0 0 0 9 8.625 2.625 2.625 0 0 0 11.625 6 2.625 2.625 0 0 0 9 3.375z" fill="#999999"/>
                                        </svg>
                                    </span>
                                </div>
                            </label>
                            <label className={styles.rememberMe}>
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <button className={styles.primaryButton} type="button">Log in</button>
                            <p className={styles.forgot}>
                                Forgot your <span>username</span> or <span>password</span>?
                            </p>
                        </form>
                    </div>

                    <div className={styles.divider} aria-hidden="true"></div>

                    <div className={styles.registerColumn}>
                        <h2>Not registered?</h2>
                        <ul className={styles.benefits}>
                            <li>View and pay your SaskTel eBILL</li>
                            <li>Change your SaskTel passwords and account settings</li>
                            <li>Upgrade your current devices and services</li>
                            <li>Check your data usage</li>
                            <li>Watch your maxTV GO Apps anywhere</li>
                        </ul>
                        <button className={styles.primaryButton} type="button">Register</button>
                        <a className={styles.learnMore} href="#">Learn more about mySASKTEL</a>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <span className={styles.footerLogo}>SaskTel</span>
                    <span className={styles.footerText}>© 2026 SaskTel and its licensors. All rights reserved.</span>
                </div>
            </footer>
        </div>
    </>
}

export default LoginPage;
