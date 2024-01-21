import { useEffect, useState } from 'react';
import { getCharacters } from 'api/characters';
import { openModalError } from 'utils/utils';

export function useCharacters() {
    const [characters, setCharacters] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    const [enableNextPage, setEnableNextPage] = useState(false);

    const getCharactersFromAPI = async (currentPage = 0, sorting = true, keyWord = '') => {
        setShowLoader(true);
        try {
            const charactersFromApi = await getCharacters((currentPage * 6), sorting, keyWord);
            const newEnableNextPage = charactersFromApi.length > 5;
            setEnableNextPage(newEnableNextPage);
            setCharacters(charactersFromApi);
        } catch (error) {
            if (error.statusCode !== 404) {
                openModalError();
            }
            setCharacters([]);
            setEnableNextPage(false);
        } finally {
            setShowLoader(false);
        }
    };

    useEffect(() => {
        getCharactersFromAPI();
    }, []);

    return {characters, showLoader, enableNextPage, getCharactersFromAPI};
}