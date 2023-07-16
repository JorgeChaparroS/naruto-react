import Head from 'next/head';
import Layout from '../../components/layout/layout';
import { useRouter } from 'next/router';
import en from '../../public/i18n/en';
import es from '../../public/i18n/es';
import MyInput from '../../components/input/input';
import MyButton from '../../components/button/button';
import Loader from '../../components/loader/loader';
import Paginator from '../../components/paginator/paginator';
import CardCharacter from '../../components/card-character/card-character';
import { useEffect, useState } from 'react';
import styles from './characters.module.scss';
import { getCharacters } from '../../utils/utils';

export default function Characters() {

    const router = useRouter();
    const { locale } = router;
    const i18n = locale === 'es' ? es : en;

    const [sorting, setSorting] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [showLoader, setShowLoader] = useState(true);
    const [enableNextPage, setEnableNextPage] = useState(false);
    
    let keyWord = '';
    const setKeyWord = (value) => {
        keyWord = value;
        if (!value) {
            getCharactersFromAPI();
        }
    };

    const onHandleClickButtonSearch = () => {
        getCharactersFromAPI();
    }

    const changeSorting = () => {
        setSorting(!sorting);
    };

    const openModalDetail = (character) => {
        console.log("se abre el modal", character);
    };

    const getCharactersFromAPI = async () => {
        setShowLoader(true);
        try {
            const charactersFromApi = await getCharacters((currentPage * 6), sorting, keyWord);
            setEnableNextPage(charactersFromApi.length > 5);
            setCharacters(charactersFromApi);
            setShowLoader(false);
        } catch {
            characters([]);
            setEnableNextPage(false);
            setShowLoader(false);
        }
    };

    useEffect(() => {
        getCharactersFromAPI();
    }, [currentPage, sorting]);

    return (
        <Layout>
            <Head>
                <title>{`${i18n.header} - ${i18n.mainPage.charactersCard.title}`}</title>
            </Head>
            <main className='container mx-auto content-page-container d-flex align-items-center flex-column'>
                
                <h2 className="d-none d-xl-block w-100">{i18n.mainPage.charactersCard.title}</h2>

                <section className='row w-100 mt-3 justify-content-center justify-content-md-start'>
                    <div className='col-12 col-md-6 col-xl-4 mb-3 mb-md-0'>
                        <MyInput placeholder={i18n.clansPage.input} handleChange={e => setKeyWord(e.target.value)}></MyInput>
                    </div>
                    <div className='col-6 col-md-3 col-xl-2'>
                        <MyButton buttonLabel={i18n.charactersPage.search} buttonClass='warning' buttonClicked={onHandleClickButtonSearch}></MyButton>
                    </div>
                    <div className='col-8 col-md-5 col-xl-3 mt-3 mt-xl-0'>
                        <MyButton 
                            buttonLabel={sorting ? i18n.charactersPage.orderByName : i18n.charactersPage.orderByTop} 
                            buttonClass={sorting ? 'outline-danger' : 'outline-info'} 
                            buttonClicked={changeSorting}
                        ></MyButton>
                    </div>
                </section>

                <div className='row mt-3 w-100'>
                    {
                        characters?.length > 0 && characters?.map((character, index) => {
                            return <div key={'cardCharacter_' + index} className='col-12 col-md-6 col-xl-4 mb-3'>
                                <CardCharacter characterInfo={character} onHadleBtnClick={openModalDetail}></CardCharacter>
                            </div>
                        })
                    }
                </div>
                
                {  characters?.length && <Paginator enableNextPage={enableNextPage} currentPage={currentPage || 0} setCurrentPage={setCurrentPage}></Paginator>}

                {
                    !characters?.length && <article>
                        <img src='https://laverdadnoticias.com/export/sites/laverdad/img/2020/11/20/captura_de_pantalla_2020-11-20_a_laxsx_11_07_42.png_1740367483.png' alt='not_found' className={['w-100', styles.img].join(' ')}/>
                        <p className='text bold mt-3 text-center'>{i18n.charactersPage.notFound}</p>
                    </article>
                }

                {
                    showLoader && <Loader></Loader>
                }
            </main>
        </Layout>
    );
}