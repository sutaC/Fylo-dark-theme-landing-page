import styles from "./GetStarted.module.css";
import Button from "../components/Button";

export default function GetStarted() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle sing in
        console.log("Sing in");
    };

    return (
        <section
            className={styles.getStarted}
            id="getstarted"
            aria-labelledby="hgetstarted"
        >
            <div className={styles.card}>
                <h2 id="hgetstarted">Get early access today</h2>
                <p>
                    It only takes a minute to sign up and our free starter tier
                    is extremely generous. If you have any questions, our
                    support team would be happy to help you.
                </p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        name="email"
                        type="email"
                        className={styles.email}
                        placeholder="email@examplce.com"
                    />
                    <Button type="submit">Get Started For Free</Button>
                </form>
            </div>
        </section>
    );
}
