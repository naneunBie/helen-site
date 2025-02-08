import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import Footer from './footer';
import Navbar from './navbar';
import HeadCustom from './head-custom';

export default function Layout({ children, home }) {
    return (
        <>
            <HeadCustom></HeadCustom>

            {home ? (
                <>
                    <Navbar home></Navbar>
                    <div className={styles.container}>
                        <main>{children}</main>
                    </div>
                </>
            ) : (
                <>
                    <Navbar></Navbar>
                </>
            )}

            {!home && (
                <div className={styles.container}>
                    <main>{children}</main>


                    <div className={styles.backToHome}>
                        <button className="transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:bg-pink-400 text-pink-500 font-semibold hover:text-white py-2 px-4 border border-rose-400 hover:border-transparent rounded">
                            <Link href="/">back</Link>
                        </button>
                    </div>

                </div>
            )}

            <Footer></Footer>
        </>
    );
}