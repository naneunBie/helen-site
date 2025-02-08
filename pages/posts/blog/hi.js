import Link from 'next/link';
import styles from './hi.module.css';

export default function HiBlog() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.frame}>
                    <div className={styles.circle}></div>
                    <div className={`${styles["line"]} ${styles["right"]}`}></div>
                    <div className={`${styles["bracket"]} ${styles["left"]}`}></div>
                    <div className={`${styles["bracket"]} ${styles["right"]}`}></div>
                    <div className={`${styles["small"]} ${styles["top"]}`}><span className={styles.firstLetter}>R</span>edirect to</div>
                    <div className={styles.big}>naneun bie</div>
                    <div className={`${styles["small"]} ${styles["bottom"]}`}><a href="/posts/blog">click me</a></div>
                    <div className={`${styles["hide"]} ${styles["top"]}`}></div>
                    <div className={`${styles["hide"]} ${styles["bottom"]}`}></div>
                </div>
            </div>
        </>
    )
}