import styles from "./Features.module.css";

export default function Features() {
    return (
        <section
            className={styles.features}
            id="features"
            aria-label="Features"
        >
            <div className={styles.feature}>
                <img
                    src="/images/icon-access-anywhere.svg"
                    alt="Access anywhere"
                />
                <p className={styles.header}>Access your files, anywhere</p>
                <p>
                    The ability to use a smartphone, tablet, or computer to
                    access your account means your files follow you everywhere.
                </p>
            </div>

            <div className={styles.feature}>
                <img src="/images/icon-security.svg" alt="Security" />
                <p className={styles.header}>Security you can trust</p>
                <p>
                    2-factor authentication and user-controlled encryption are
                    just a couple of the security features we allow to help
                    secure your files.
                </p>
            </div>

            <div className={styles.feature}>
                <img src="/images/icon-collaboration.svg" alt="Collaboration" />
                <p className={styles.header}>Real-time collaboration</p>
                <p>
                    Securely share files and folders with friends, family and
                    colleagues for live collaboration. No email attachments
                    required.
                </p>
            </div>

            <div className={styles.feature}>
                <img src="/images/icon-any-file.svg" alt="Any file" />
                <p className={styles.header}>Store any type of file</p>
                <p>
                    Whether you're sharing holidays photos or work documents,
                    Fylo has you covered allowing for all file types to be
                    securely stored and shared.
                </p>
            </div>
        </section>
    );
}
