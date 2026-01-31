
import styles from "./myPortal.module.css";

function MyPortal() {
    return (
        <div className={styles.portalPage}>
            <header className={styles.utilityBar}>
                <div className={styles.utilityLinks}>
                    <span>Personal</span>
                    <span>Business</span>
                </div>
                <div className={styles.searchBar}>
                    <span className={styles.searchText}>What are you looking for?</span>
                    <span className={styles.searchIcon} aria-hidden="true" />
                </div>
                <div className={styles.utilityActions}>
                    <div className={styles.utilityItem}>
                        <span className={styles.utilityIcon}>?</span>
                        <span>Support</span>
                    </div>
                    <div className={styles.utilityItem}>
                        <span className={styles.utilityIcon}>✉</span>
                        <span>Sasktel.net</span>
                    </div>
                    <div className={styles.utilityItem}>
                        <span className={styles.utilityIcon}>🛒</span>
                        <span>Cart</span>
                    </div>
                    <div className={styles.utilityItem}>
                        <span className={styles.utilityIcon}>◎</span>
                        <span>mySASKTEL</span>
                    </div>
                    <div className={styles.utilityItem}>Log Out</div>
                </div>
            </header>

            <div className={styles.brandBar}>
                <div className={styles.logo}>
                    SaskTel <span className={styles.logoMark} />
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
                                <span className={styles.balanceAmount}>0.00</span>
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
