import styles from './footer.module.scss';
import Link from 'next/link';
import { useLanguage } from 'hooks/language';

const footerClasses = ["row", "mx-0", "align-items-center", "py-3", "mt-3", "background-general", styles.footer].join(" ");

export default function Footer() {

    const {i18n} = useLanguage();

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