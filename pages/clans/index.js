import Head from 'next/head';
import Layout from '../../components/layout/layout';
import { useRouter } from 'next/router';
import en from '../../public/i18n/en';
import es from '../../public/i18n/es';
import { useState, useEffect } from 'react';
import MyInput from '../../components/input/input';
import styles from './clans.module.scss';
import { Constants } from '../../utils/constants';
import Loader from '../../components/loader/loader';
import Paginator from '../../components/paginator/paginator';

export default function Clans() {

    const router = useRouter();
    const { locale } = router;
    const i18n = locale === 'es' ? es : en;
    const [clans, setClans] = useState([]);
    const [clansPaginated, setClansPaginated] = useState([]);
    let clansFiltered = [];
    let enableNextPage = false;
    const [currentPage, setCurrentPage] = useState(0);
    const [showLoader, setShowLoader] = useState(true);
    const [keyWord, setKeyWord] = useState('');

    useEffect(() => {
        const getClans = async () => {
            const res = await fetch(Constants.API + Constants.API_PATH.CLAN);
            const resJson = await res.json();
            setClans(resJson);
            clansFiltered = resJson;
            setClansPaginated(generatePaginationRecords(0));
            setShowLoader(false);
        };
        getClans();
    }, [])

    useEffect(() => {
        const filterByName = () => {
            const searchBy = keyWord.toUpperCase();
            clansFiltered = clans?.filter(clan => clan?.name?.toUpperCase().includes(searchBy));
            setClansPaginated(generatePaginationRecords(0));
            setCurrentPage(0);
        };
        filterByName();
    }, [keyWord])

    useEffect(() => {
        setClansPaginated(generatePaginationRecords(currentPage));
    }, [currentPage]);

    const generatePaginationRecords = (newCurrentPage) => {
        const paginatedRecords = [];
        const offset = newCurrentPage * 10;
        clansFiltered?.forEach((clan, index) => {
            if (index >= offset && index < offset + 10) {
                paginatedRecords.push(clan);
            }
        });
        enableNextPage = paginatedRecords.length > 9;
        return paginatedRecords;
    };

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

                                <Paginator enableNextPage={true} currentPage={currentPage} setCurrentPage={setCurrentPage}></Paginator>
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