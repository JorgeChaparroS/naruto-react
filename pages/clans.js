import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Clans() {
    return (
        <Layout>
            <Head>
                <title>Clanes</title>
            </Head>
            <main className='container mx-auto content-page-container'>
                <h1>Clanes</h1>
                <Link href="/">Volver</Link>
            </main>
        </Layout>
    );
}