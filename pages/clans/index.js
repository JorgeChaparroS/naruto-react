import Head from 'next/head';
import Layout from '../../components/layout/layout';
import { useLanguage } from 'hooks/language';
import { useState } from 'react';
import MyInput from '../../components/input/input';
import styles from './clans.module.scss';
import Loader from '../../components/loader/loader';
import Paginator from '../../components/paginator/paginator';
import { useClans } from 'hooks/clans';
import { useFilterClans } from 'hooks/filterClans';
import { usePaginateClans } from 'hooks/paginateClans';
import { useEffect } from 'react';

export default function Clans() {

    const { i18n } = useLanguage();
    const { clans, showLoader } = useClans();
    const [ keyWord, setKeyWord ] = useState('');
    const { clansFiltered } = useFilterClans({clans, keyWord});
    const [ currentPage, setCurrentPage ] = useState(0);
    const { clansPaginated, enableNextPage } = usePaginateClans({clansFiltered, currentPage});

    useEffect(() => {
        setCurrentPage(0);
    }, [keyWord]);

    return (
        <Layout>
            <Head>
                <title>{`${i18n.header} - ${i18n.mainPage.clansCard.title}`}</title>
            </Head>
            <main className='container mx-auto content-page-container'>
                <h2 className='d-none d-xl-block'>{i18n.mainPage.clansCard.title}</h2>
                {
                    clans?.length > 0 && (
                        <>
                            <section className='row mt-3'>
                                <div className='col-12 col-md-6 col-xl-4'>
                                    <MyInput placeholder={i18n.clansPage.input} handleChange={e => setKeyWord(e.target.value)}></MyInput>
                                </div>
                            </section>

                            <section className={[styles.shadowed, 'mt-3'].join(' ')}>
                                <table className="w-100 d-none d-xl-table">
                                    <thead>
                                        <tr className={[styles.tableHeader, styles.tr].join(' ')}>
                                            <th className="p-4 w-20 h5">{i18n.clansPage.column1}</th>
                                            <th className="p-4 w-30 h5">{i18n.clansPage.column2}</th>
                                            <th className="p-4 w-50 h5">{i18n.clansPage.column3}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            clansPaginated.map((clan, index) => {
                                                return <tr key={clan?.id || `clan-${index}`} className={[styles.tr, styles.tableRow].join(' ')}>
                                                    <td className='p-3 w-20 text'> 
                                                        {clan?.icon && (<img src={clan?.icon} className={styles.imageIcon}/>)}
                                                    </td>
                                                    <td className='p-3 w-30 text'>{clan?.name}</td>
                                                    <td className='p-3 w-50 text'>
                                                        <a href={clan.link} target="_blank">{i18n.clansPage.link} {clan?.name}</a>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>

                                <table className="w-100 d-xl-none">
                                    <thead>
                                        <tr className={[styles.tableHeader, styles.tr].join(' ')}>
                                            <th className="p-3 w-100 h5">{i18n.mainPage.clansCard.title}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            clansPaginated.map((clan, index) => {
                                                return <tr key={clan?.id || `clan-${index}`} className={[styles.tr, styles.tableRow, 'w-100'].join(' ')}>
                                                    <td className='p-3 row align-items-center'>
                                                        <aside className='col-3 col-md-2'>
                                                            {clan?.icon && (<img src={clan?.icon} className={styles.imageIcon}/>)}
                                                        </aside>
                                                        <aside className='col-9 col-md-10 text'>
                                                            <p className='mb-2'>{clan?.name}</p>
                                                            <a href={clan.link} target="_blank">{i18n.clansPage.link} {clan?.name}</a>
                                                        </aside>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>

                                <Paginator enableNextPage={enableNextPage} currentPage={currentPage || 0} setCurrentPage={setCurrentPage}></Paginator>
                            </section>
                        </>
                    )
                }
            </main>
            {
                showLoader && <Loader></Loader>
            }
        </Layout>
    );
}