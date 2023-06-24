import styles from './footer.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import en from '../../public/i18n/en';
import es from '../../public/i18n/es';

const footerClasses = ["row", "mx-0", "align-items-center", "py-3", "mt-3", "background-general", styles.footer].join(" ");

export default function Footer() {

    const router = useRouter();
    const { locale } = router;
    const i18n = locale === 'es' ? es : en;

    return (
        <>
            <footer className={footerClasses}>
                <ul className="row m-0 d-flex align-items-center">
                    <ol className="col-12 col-md-4 text-center">
                        <Link href="/about" className='text pointer'>{i18n.footer.about}</Link>
                    </ol>
                    <ol className="col-12 col-md-4 text-center">
                        <Link href="/author" className='text pointer'>{i18n.footer.author}</Link>
                    </ol>
                    <ol className="col-12 col-md-4 text-center text">© {i18n.footer.copyRight} 2023</ol>
                </ul>
            </footer>
        </>
    )
}