import styles from "./CallToAction.module.css";

export default function CallToAction() {
    return (
        <section
            className={styles.callToAction}
            id="CallToAction"
            aria-labelledby="hCallToAction"
        >
            <img
                src="/images/illustration-stay-productive.png"
                alt="Stay productive"
                className={styles.illustration}
            />

            <div className={styles.description}>
                <h2 id="hCallToAction">Stay productive, wherever you are</h2>

                <p className={styles.subscript}>
                    Never let location be an issue when accessing your files.
                    Fylo has you covered for all of your file storage needs.
                </p>

                <p className={styles.subscript}>
                    Securely share files and folders with friends, family and
                    colleagues for live collaboration. No email attachments
                    required.
                </p>

                <a href="#" className={styles.link}>
                    See how Fylo works
                </a>
            </div>
        </section>
    );
}
