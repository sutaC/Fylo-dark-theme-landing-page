import Button from "../components/Button";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <main className={styles.hero}>
            <img
                src="/images/illustration-intro.png"
                alt="Hero illustration"
                className={styles.illustration}
            />
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p className={styles.subscript}>
                Fylo stores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends family, and co-workers.
            </p>
            <Button>Get Started</Button>
        </main>
    );
}
