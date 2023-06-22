import styles from './header.module.scss';
import { useRouter } from 'next/router'

const imageHeaderUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Shuriken_%28Naruto%29.svg/2048px-Shuriken_%28Naruto%29.svg.png';

const headerClasses = [styles.header, 'row', 'mx-0', 'align-items-center', 'w-100', 'py-1', 'py-xl-0'].join(' ');
const imgClasses = [styles.img, 'pointer'].join(' ');
const h1Classes = [styles.h1, 'col-12', 'col-xl-8'].join(' ');

export default function Header(){

    const router = useRouter();

    return (
        <>
            <header className={headerClasses}>
                <aside className="col-4 col-md-6">
                    <img src={imageHeaderUrl} className={imgClasses} onClick={() => router.push('/')}></img>
                </aside>
                <aside className="col-8 col-md-6">
                    <div className="row justify-content-end justify-content-xl-between align-items-center">
                        <h1 className={h1Classes}>NarutoWiki</h1>
                        <section className="col-5 col-md-4 col-xl-2 mt-4 mt-xl-0">
                            Lenguaje
                        </section>
                    </div>
                </aside>
            </header>
        </>
    )
}