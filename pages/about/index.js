import Head from 'next/head';
import Layout from '../../components/layout/layout';
import { useLanguage } from 'hooks/language';
import styles from './about.module.scss';

export default function About() {

    const {i18n} = useLanguage();
    
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