import { Constants } from './constants';

export async function getClans() {
    const res = await fetch(Constants.API + Constants.API_PATH.CLAN);
    const resJson = await res.json();
    return resJson;
}

export async function getCharacters(offset, sort, name) {
    const endpoint = Constants.API + Constants.API_PATH.CHARACTER + `?limit=6&offset=${offset}${sort ? '&sort=true' : ''}${name ? `&name=${name}` : ''}`;
    const res = await fetch(endpoint);
    const resJson = await res.json();
    return resJson;
}