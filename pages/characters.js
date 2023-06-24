import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/layout';
import { useRouter } from 'next/router';
import en from '../public/i18n/en';
import es from '../public/i18n/es';

export default function Characters() {

    const router = useRouter();
    const { locale } = router;
    const i18n = locale === 'es' ? es : en;

    return (
        <Layout>
            <Head>
                <title>{`${i18n.header} - ${i18n.mainPage.charactersCard.title}`}</title>
            </Head>
            <main className='container mx-auto content-page-container'>
                <h1>Personajes</h1>
                <Link href="/">Volver</Link>
            </main>
        </Layout>
    );
}