import axios from 'axios'
import { Constants } from '../utils/constants'

export async function getClans() {
    try {
        const response = await axios.get(Constants.API + Constants.API_PATH.CLAN);
        return response?.data;
    } catch (error) {
        throw error;
    }
}