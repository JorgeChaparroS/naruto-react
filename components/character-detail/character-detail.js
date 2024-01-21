import Alert from "../alert/alert";
import { Constants } from "utils/constants";
import styles from './character-detail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import MyButton from "../button/button";
import { useState } from 'react';
import { useLanguage } from 'hooks/language';
import { closeCustomModal } from "utils/utils";

export default function CharacterDetail({characterSelected}) {

    const [indexImageCharacter, setIndexImageCharacter] = useState(0);
    const { i18n } = useLanguage();
    const infoKeys = Object.keys(characterSelected?.info || {});

    const onChangeImage = (operation) => {
        const valueToAdd = operation === 'increase' ? 1 : -1;
        setIndexImageCharacter(indexImageCharacter + valueToAdd);
    };

    const closeAlertDetail = () => {
        closeCustomModal(Constants.COMPONENTS.MODAL_DETAIL_ID);
        setIndexImageCharacter(0);
    };

    return <Alert modalId={Constants.COMPONENTS.MODAL_DETAIL_ID} sizeInCols='col-10 col-xl-8' extraExecution={closeAlertDetail}>
        <>
            <article className="d-flex flex-column align-items-center">
                <h5 className="bold text-center">{characterSelected?.name}</h5>
                {
                    characterSelected?.images?.length > 0 && <section className="d-flex flex-row w-100 justify-content-between justify-content-md-center align-items-center mt-3">
                        <button className={["btn btn-" + (indexImageCharacter === 0 ? 'secondary' : 'success'), styles.buttonForalert].join(' ')}
                            disabled={indexImageCharacter === 0}
                            onClick={() => onChangeImage('decrease')}>
                            <FontAwesomeIcon icon={faArrowCircleLeft} className={["mx-2", styles.iForalert].join(' ')}></FontAwesomeIcon>
                        </button>
                        <img src={characterSelected?.images?.[indexImageCharacter]} className={["mx-1 mx-md-3", styles.imgForalert, styles.img].join(' ')} />
                        <button className={["btn btn-" + (indexImageCharacter === ((characterSelected?.images?.length || 1) - 1) ? 'secondary' : 'success'), styles.buttonForalert].join(' ')}
                            disabled={indexImageCharacter === ((characterSelected?.images?.length || 1) - 1)}
                            onClick={() => onChangeImage('increase')}>
                            <FontAwesomeIcon icon={faArrowCircleRight} className={["mx-2", styles.iForalert].join(' ')}></FontAwesomeIcon>
                        </button>
                    </section>
                }
                {
                    characterSelected?.page && <p className='text'>
                        <a href={characterSelected?.page} target="_blank">{i18n.charactersPage.fanPage}</a>
                    </p>
                }
                {
                    infoKeys?.length > 0 && <section className='row flex-row px-4 my-3'>
                        {
                            infoKeys?.map((infoKey, index) => {
                                return <div key={'data_' + index} className='col-12 col-md-6 col-xl-4 mb-3'>
                                    <span className="small-text">{infoKey}:</span>
                                    <p className="text bold m-0">{characterSelected?.info?.[infoKey]}</p>
                                </div>
                            })
                        }
                    </section>
                }
                <section className="row w-100 justify-content-center">
                    <div className='col-8 col-md-4 col-xl-3'>
                        <MyButton
                            buttonLabel={i18n.charactersPage.buttonModal}
                            buttonClass='success'
                            buttonClicked={closeAlertDetail}
                        ></MyButton>
                    </div>
                </section>
            </article>
        </>
    </Alert>
}