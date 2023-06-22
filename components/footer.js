import styles from './footer.module.scss';
import Link from 'next/link';

const footerClasses = ["row", "mx-0", "align-items-center", "py-3", "mt-3", "background-general", styles.footer].join(" ");

export default function Footer() {
    return (
        <>
            <footer className={footerClasses}>
                <ul className="row m-0 d-flex align-items-center">
                    <ol className="col-12 col-md-4 text-center">
                        <Link href="/about" className='text pointer'>Acerca del proyecto</Link>
                    </ol>
                    <ol className="col-12 col-md-4 text-center">
                        <Link href="/author" className='text pointer'>Sobre el autor</Link>
                    </ol>
                    <ol className="col-12 col-md-4 text-center text">© Derechos Reservados 2023</ol>
                </ul>
            </footer>
        </>
    )
}