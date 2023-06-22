import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Naruto Wiki</title>
      </Head>
      <main className='container mx-auto content-page-container'>
          <h1>Home Page</h1>
      </main>
    </Layout>
  )
}
