import Head from 'next/head';
import Layout from '../components/layout/layout';
import CardMainPage from '../components/card-main-page/card-main-page';
import { useLanguage } from '../hooks/language';

export default function Home() {

  const {i18n} = useLanguage();

  return (
    <Layout>
      <Head>
        <title>{i18n.header}</title>
      </Head>
      <div className="d-flex justify-content-center align-items-center content-page-container">
        <section className="container row mx-auto">
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <CardMainPage 
              cardImageUrl='https://qph.cf2.quoracdn.net/main-qimg-c9489a8c8ac8fb654deb3d495910200c-lq'
              cardFor='clans'
              cardTile={i18n.mainPage.clansCard.title}
              cardDescription={`¡${i18n.mainPage.clansCard.description}!`}
            ></CardMainPage>
          </div>
          <div className="col-12 col-md-6">
            <CardMainPage 
              cardImageUrl='https://wallpapers.com/images/featured/peo1d7c1aqugno3e.jpg'
              cardFor='characters'
              cardTile={i18n.mainPage.charactersCard.title}
              cardDescription={`¡${i18n.mainPage.charactersCard.description}!`}
            ></CardMainPage>
          </div>
        </section>
      </div>
    </Layout>
  )
}
