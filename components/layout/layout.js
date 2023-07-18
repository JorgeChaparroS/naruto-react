import Header from '../header/header';
import Footer from '../footer/footer';
import Alert from '../alert/alert';
import { Constants } from '../../utils/constants';
import { useRouter } from 'next/router';
import en from '../../public/i18n/en';
import es from '../../public/i18n/es';
import styles from './layout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

export default function Layout({ children }) {

    const router = useRouter();
    const { locale } = router;
    const i18n = locale === 'es' ? es : en;

    return (
        <>
            <Header></Header>
            <section className="background-general">
                <section className="content-page">
                    {children}
                </section>
                <Footer></Footer>
            </section>
            <Alert modalId={Constants.COMPONENTS.ALERT_ERROR_ID}>
                <article className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faWarning} className={["p-2 mb-3", styles.i].join(' ')}></FontAwesomeIcon>
                    <h5 className="bold text-center">{i18n.modalError.title}</h5>
                    <p className="text-center text py-3">{i18n.modalError.description}</p>
                    <img src="https://freesvg.org/img/Arnoud999-Right-or-wrong-3.png" className={styles.img}/>
                </article>
            </Alert>
        </>
    );
}