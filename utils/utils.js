import { Constants } from './constants';
import axios from 'axios';


export async function getCharacters(offset, sort, name) {
    try {
        const endpoint = Constants.API + Constants.API_PATH.CHARACTER + `?limit=6&offset=${offset}${sort ? '&sort=true' : ''}${name ? `&name=${name}` : ''}`;
        const response = await axios.get(endpoint);
        return response?.data;
    } catch (error) {
        throw error?.response?.data;
    }
}

export function openModalError() {
    const modal = document.getElementById(Constants.COMPONENTS.ALERT_ERROR_ID);
    if (modal) {
        modal.style.display = 'flex';
    }
}