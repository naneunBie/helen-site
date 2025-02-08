import styles from './topWriting.module.css';
import Image from 'next/image'

export default function TopWriting({ }) {
    return (
        <>
            <div className={styles.grid}>
                <Image
                    priority
                    src="/butterfly-right.png"
                    height={40}
                    width={40}
                    alt="Helen's"
                />
                <div className={styles.title}>
                    <h3>Must See</h3>
                </div>
            </div>

            <div className={styles.underlineTitle}></div>

            <div className={styles.grid}>
                <a href="https://nextjs.org/docs" className={styles.card}>
                    <Image
                        priority
                        src="/images/artikel1.png"
                        width="100%"
                        height="100%"
                        layout="responsive"
                    />
                    <h2>Writing 1</h2>
                    <p>How i made my journey</p>
                </a>
                <a href="https://nextjs.org/docs" className={styles.card}>
                    <Image
                        priority
                        src="/images/artikel1.png"
                        width="100%"
                        height="100%"
                        layout="responsive"
                    />
                    <h2>Writing 2</h2>
                    <p>How i made my journey</p>
                </a>
                <a href="https://nextjs.org/docs" className={styles.card}>
                    <Image
                        priority
                        src="/images/artikel1.png"
                        width="100%"
                        height="100%"
                        layout="responsive"
                    />
                    <h2>Writing 3</h2>
                    <p>How i made my journey</p>
                </a>
            </div>
        </>
    );
}