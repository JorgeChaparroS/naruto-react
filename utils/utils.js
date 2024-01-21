import { Constants } from './constants';

export function openModalError() {
    openCustomModal(Constants.COMPONENTS.ALERT_ERROR_ID);
}

export function openCustomModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
    }
}

export function closeCustomModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}