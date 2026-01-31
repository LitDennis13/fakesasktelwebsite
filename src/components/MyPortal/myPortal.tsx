
import { Link } from "react-router-dom";
import styles from "./myPortal.module.css";
import { useEffect } from "react";

function MyPortal() {

    useEffect(() => {
            document.title = "Home | MyPortal | SaskTel";
        }, []);

    return (
        <div className={styles.portalPage}>
            <div className={styles.brandBar}>
                <div className={styles.logo}>
                    <Link to={"/"}>
                        <img src="https://www.sasktel.com/assets/img/Header/LogoDark.svg" alt="" />
                    </Link>
                </div>
            </div>

            <section className={styles.tabStrip}>
                <div className={styles.tabCard}>
                    <div className={styles.tabIcon}>
                        <span className={styles.iconCircle}>📁</span>
                    </div>
                    <div className={styles.tabLabel}>
                        <span>MY ACCOUNTS</span>
                        <span className={styles.caret}>⌄</span>
                    </div>
                    <div className={styles.tabUnderline} />
                </div>
                <div className={styles.tabCard}>
                    <div className={styles.tabIcon}>
                        <span className={styles.iconCircle}>🧾</span>
                    </div>
                    <div className={styles.tabLabel}>
                        <span>BILLING &amp; PAYMENTS</span>
                        <span className={styles.caret}>⌄</span>
                    </div>
                </div>
                <div className={styles.tabCard}>
                    <div className={styles.tabIcon}>
                        <span className={styles.iconCircle}>👤</span>
                    </div>
                    <div className={styles.tabLabel}>
                        <span>PROFILE</span>
                        <span className={styles.caret}>⌄</span>
                    </div>
                </div>
            </section>

            <main className={styles.portalMain}>
                <h1 className={styles.welcomeHeading}>Welcome to mySASKTEL, Hamza</h1>

                <section className={styles.accountCard}>
                    <div className={styles.accountHeader}>
                        <div className={styles.accountInfo}>
                            <p className={styles.kicker}>HOME SERVICES ACCOUNT</p>
                            <h2 className={styles.accountTitle}>
                                Home Services <span className={styles.arrow}>›</span>
                            </h2>
                            <p className={styles.kicker}>ACCOUNT NUMBER</p>
                            <p className={styles.accountNumber}>67676767</p>
                        </div>
                        <div className={styles.balanceBlock}>
                            <p className={styles.kicker}>YOUR BALANCE</p>
                            <div className={styles.balanceRow}>
                                <span className={styles.balanceCurrency}>$</span>
                                <span className={styles.balanceAmount}>197.43</span>
                            </div>
                        </div>
                        <div className={styles.paymentBlock}>
                            <button className={styles.payButton} type="button">
                                VIEW/PAY EBILL
                            </button>
                            <span className={styles.autoPayments}>YOUR AUTOMATIC PAYMENTS</span>
                        </div>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.planRow}>
                        <div className={styles.planInfo}>
                            <p className={styles.kicker}>INTERNET PLAN</p>
                            <p className={styles.planName}>infiNET 150</p>
                        </div>
                        <div className={styles.addressCard}>
                            <div className={styles.wifiIcon}>📶</div>
                            <div>
                                <p className={styles.kicker}>INTERNET</p>
                                <p className={styles.address}>Random address</p>
                            </div>
                        </div>
                        <span className={styles.arrowLarge}>›</span>
                    </div>
                </section>
            </main>

            <div className={styles.feedbackTab}>
                <span>Give Feedback</span>
            </div>
            <div className={styles.chatBubble}>💬</div>
        </div>
    );
}

export default MyPortal;
