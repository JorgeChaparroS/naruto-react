import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Characters() {
    return (
        <Layout>
            <Head>
                <title>Personajes</title>
            </Head>
            <main className='container mx-auto content-page-container'>
                <h1>Personajes</h1>
                <Link href="/">Volver</Link>
            </main>
        </Layout>
    );
}