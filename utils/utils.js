import { Constants } from './constants';

export function openModalError() {
    const modal = document.getElementById(Constants.COMPONENTS.ALERT_ERROR_ID);
    if (modal) {
        modal.style.display = 'flex';
    }
}