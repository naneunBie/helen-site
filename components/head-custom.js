import Head from "next/head";

const name = 'Helen Febriani';
export const siteTitle = `Helen's site`;

export default function HeadCustom({ }) {
    return (
        <Head>
            <title>naneun bie</title>
            <link rel="icon" href="/favicon.png" />
            <meta
                name="description"
                content="Helen profile site"
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    )
}