import { Constants } from './constants';

export async function getClans() {
    const res = await fetch(Constants.API + Constants.API_PATH.CLAN);
    const resJson = await res.json();
    return resJson;
}