import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <img src="/images/logo.svg" alt="Logo" className={styles.logo} />
            <nav className={styles.nav}>
                <a href="#features">Features</a>
                <a href="#team">Team</a>
                <a href="#getstarted">Sign In</a>
            </nav>
        </header>
    );
}
