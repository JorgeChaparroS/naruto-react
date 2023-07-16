import styles from './paginator.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

export default function Paginator({enableNextPage, currentPage, setCurrentPage}) {

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    if (!(!enableNextPage && currentPage === 0)) {
        return <div className="paginator-container d-flex justify-content-end align-items-center p-2">
            <button className={['btn btn-light', currentPage === 0 ? 'd-none' : ''].join(' ')} onClick={prevPage}>
                <FontAwesomeIcon icon={faArrowCircleLeft} className={["mx-2", styles.i].join(' ')}></FontAwesomeIcon>
            </button>
            <span className="text px-3">{ currentPage + 1 }</span>
            <button className={['btn btn-light', enableNextPage ? '' : 'd-none'].join(' ')} onClick={nextPage}>
                <FontAwesomeIcon icon={faArrowCircleRight} className={["mx-2", styles.i].join(' ')}></FontAwesomeIcon>
            </button>
        </div>
    } return <></>;
}