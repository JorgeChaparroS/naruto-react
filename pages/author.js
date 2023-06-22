import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Author() {
    return (
        <Layout>
            <Head>
                <title>Jorge Chaparro</title>
            </Head>
            <main className='container mx-auto content-page-container'>
                <h1>Jorge Chaparro</h1>
                <Link href="/">Volver</Link>
            </main>
        </Layout>
    );
}