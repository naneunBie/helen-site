import styles from './footer.module.css';
import Image from 'next/image'

export default function Footer() {
    return (

        <div className={styles.container}>
            <div className={styles.grid}>
                <a title='instagram' href="https://www.instagram.com/ryehel7/">
                    <Image src="/icon/instagram.png" alt="foot" width={30} height={30} />
                </a>

                <a title='twitter' className={styles.gridSpace} href="https://www.instagram.com/ryehel7/">
                    <Image src="/icon/twitter.png" alt="foot" width={30} height={30} />
                </a>

                <a title='github' className={styles.gridSpace} href="https://github.com/naneunBie">
                    <Image src="/icon/github.png" alt="foot" width={30} height={30} />
                </a>

                <a title='linkedin' className={styles.gridSpace} href="https://id.linkedin.com/in/helen-febriani-5445061b9">
                    <Image src="/icon/linkedin.png" alt="foot" width={30} height={30} />
                </a>
            </div>
            <footer className={styles.footer}>
                <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p>
                        Code coming art and sharing become love -{' '} </p>
                    Made with love
                    by{' '}{' '} Helen's

                    <span className={styles.logo}>
                        <Image src="/favicon.png" alt="foot" width={25} height={25} />
                    </span>
                </a>

            </footer>
        </div>
    )
}