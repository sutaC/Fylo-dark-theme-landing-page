import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.logo}>
                <img src="/images/logo.svg" alt="Logo" />
            </a>
            <nav className={styles.nav}>
                <a href="#features">Features</a>
                <a href="#team">Team</a>
                <a href="#signin">Sign In</a>
            </nav>
        </header>
    );
}
