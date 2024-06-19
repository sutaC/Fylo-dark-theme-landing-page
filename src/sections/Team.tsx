import styles from "./Team.module.css";

export default function Team() {
    return (
        <section id="team" aria-label="Team" className={styles.team}>
            <div className={styles.member}>
                <p>
                    Fylo has improved our team productivity by an order of
                    magnitude. Since making the switch our team has become a
                    well-oiled collaboration machine.
                </p>
                <div className={styles.person}>
                    <img
                        src="/images/profile-1.jpg"
                        alt="Satish Patel avatar"
                        className={styles.avatar}
                    />
                    <div className={styles.nameTag}>
                        <p className={styles.name}>Satish Patel</p>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>

            <div className={styles.member}>
                <p>
                    Fylo has improved our team productivity by an order of
                    magnitude. Since making the switch our team has become a
                    well-oiled collaboration machine.
                </p>
                <div className={styles.person}>
                    <img
                        src="/images/profile-2.jpg"
                        alt="Bruce McKenzie avatar"
                        className={styles.avatar}
                    />
                    <div className={styles.nameTag}>
                        <p className={styles.name}>Bruce McKenzie</p>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>

            <div className={styles.member}>
                <p>
                    Fylo has improved our team productivity by an order of
                    magnitude. Since making the switch our team has become a
                    well-oiled collaboration machine.
                </p>
                <div className={styles.person}>
                    <img
                        src="/images/profile-3.jpg"
                        alt="Iva Boyd avatar"
                        className={styles.avatar}
                    />
                    <div className={styles.nameTag}>
                        <p className={styles.name}>Iva Boyd</p>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
