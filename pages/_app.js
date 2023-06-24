import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}