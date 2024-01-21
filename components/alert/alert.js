import styles from './alert.module.scss';
import { closeCustomModal } from 'utils/utils';

export default function Alert({ children, sizeInCols, modalId, extraExecution }) {

    const closeModal = () => {
        closeCustomModal(modalId);
        if (extraExecution) {
            extraExecution();
        }
    }

    return <div id={modalId} className={[styles.appModal, 'row justify-content-center align-items-center'].join(' ')} data-testid='alert-component-id-test'>
        <article className={[styles.appModalContent, 'pt-2 pb-4 px-3 px-xl-4', (sizeInCols || 'col-10 col-md-8 col-xl-6')].join(' ')}>
            <div className='d-flex justify-content-end'>
                <span className={styles.close} onClick={closeModal}>&times;</span>
            </div>
            {children}
        </article>
    </div>
}