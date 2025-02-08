import Image from 'next/image'
import TopWriting from '../../../components/blog/topWriting';
import Layout from "../../../components/layout";
import styles from '../../../styles/dashboard.blog.module.css'

export default function WelcomePage() {
    return (

        <Layout home>
            <div className={styles.welcome}>
                <div className={styles.flexContainer}>
                    <div className={styles.rightItem}>
                        <Image
                            priority
                            src="/hands.png"
                            height={250}
                            width={200}
                            alt="Helen's"
                        />
                    </div>
                    <div className={styles.leftItem}>
                        <div className={styles.blockquote}>
                            <p>I believe as long as you still do your best, its kind like a magic would flow with you.</p>
                            <p>Also i would share little things from my experience here. </p><br></br>
                            <p>Thank you for coming to my personal blog, i hope you enjoy.</p>
                            <p>-Helen</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <TopWriting></TopWriting>
            </div>
        </Layout >
    );
}