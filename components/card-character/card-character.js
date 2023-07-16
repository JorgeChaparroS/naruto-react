import styles from './card-character.module.scss';
import MyButton from '../button/button';
import { useRouter } from 'next/router';
import en from '../../public/i18n/en';
import es from '../../public/i18n/es';

export default function CardCharacter({characterInfo, onHadleBtnClick}) {

    const router = useRouter();
    const { locale } = router;
    const i18n = locale === 'es' ? es : en;

    return <div className='w-100 row flex-column align-items-center card mx-0 px-0 py-3 py-md-4'>
        { characterInfo?.images[0] && <img src={characterInfo?.images[0]} className={['col-8 mb-2 mb-md-3 px-0 border-success', styles.img].join(' ')}/> }
        { characterInfo?.name && <h3 className='text-center bold'>{characterInfo?.name}</h3> }
        <section className='row justify-content-center mt-3'>
            <div className='col-7 col-md-8 col-xl-7'>
                <MyButton buttonLabel={i18n.charactersPage.detail} buttonClass='success' buttonClicked={() => onHadleBtnClick(characterInfo)}></MyButton>
            </div>
        </section>
    </div>
}