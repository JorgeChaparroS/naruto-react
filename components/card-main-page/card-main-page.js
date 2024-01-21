import styles from './card-main-page.module.scss';
import MyButton from '../button/button';
import { useLanguage } from 'hooks/language';
import { useRouter } from 'next/router';


export default function CardMainPage({cardImageUrl, cardFor, cardTile, cardDescription}){
    const router = useRouter();
    const {i18n} = useLanguage();

    const classDependingCardfor = cardFor !== 'clans' ? 'info' : 'warning';
    const imageStyles = ['col-8 mb-2 mb-md-3 px-0', styles.img, `border-${classDependingCardfor}`].join(' ');
    const spanStyles = ['col-2 px-0', `bg-${classDependingCardfor}`].join(' ');

    const redirection = () => {
        router.push(`/${cardFor}`);
    }

    return (
        <>
            <div className={['w-100 row flex-column align-items-center mx-0 px-0 py-3 py-md-4 card', styles.card].join(' ')}>
                <section className={['row px-0 justify-content-end mb-2 mb-md-3', styles.containerDecorator].join(' ')}>
                    <span className={spanStyles}></span>
                </section>
                <img src={cardImageUrl} className={imageStyles}></img>
                <h3 className="text-center bold">{cardTile}</h3>
                <p className="mb-2 mb-md-3 text-center text">{cardDescription}</p>
                <section className="row justify-content-center">
                    <div className='col-6 col-md-5 col-xl-3'>
                        <MyButton
                            buttonLabel={i18n.mainPage.button}
                            buttonClass={classDependingCardfor}
                            buttonClicked={redirection}
                        ></MyButton>
                    </div>
                </section>
            </div>
        </>
    );
}