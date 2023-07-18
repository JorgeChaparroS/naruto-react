import Head from 'next/head';
import Layout from '../../components/layout/layout';
import { useRouter } from 'next/router';
import en from '../../public/i18n/en';
import es from '../../public/i18n/es';
import styles from './about.module.scss';

export default function About() {

    const router = useRouter();
    const { locale } = router;
    const i18n = locale === 'es' ? es : en;
    
    return (
        <Layout>
            <Head>
                <title>{`${i18n.header} - ${i18n.footer.about}`}</title>
            </Head>
            <main className='container mx-auto content-page-container'>
                <section className={['p-4', styles.section].join(' ')}>
                    <h2>{i18n.aboutProject.title}</h2>
                    <p className='text'>{i18n.aboutProject.description}</p>
                    <h3 className={["p-3 text-center", styles.h3].join(' ')}>{i18n.aboutProject.thanks}</h3>
                </section>
            </main>
        </Layout>
    );
}