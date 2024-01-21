import { useLanguage } from 'hooks/language';
import styles from './loader.module.scss';

export default function Loader() {

    const {i18n} = useLanguage();

    return <div className={[styles.loaderContainer, 'd-flex align-items-center justify-content-center'].join(' ')}>
            <section className={[styles.loaderMessage, 'd-flex flex-column align-items-center justify-content-center'].join(' ')}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Naruto_Shiki_Fujin.svg/1200px-Naruto_Shiki_Fujin.svg.png" className={[styles.img, 'mb-2 mb-md-3'].join(' ')}/>
                <span className="text bold">{i18n.loader}</span>
            </section>
        </div>
}