import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Naruto Wiki</title>
      </Head>
      <div>
        <h1>Home Page</h1>
        <Link href="/author">Ir</Link>
      </div>
    </Layout>
  )
}
