import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>Sobre este proyecto</title>
            </Head>
            <h1>Sobre este proyecto</h1>
            <Link href="/">Volver</Link>
        </Layout>
    );
}