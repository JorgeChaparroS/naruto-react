import { useState, useEffect } from 'react'
import { getClans } from 'api/apiUtils'

export function useClans () {
    const [clans, setClans] = useState([]);
    const [showLoader, setShowLoader] = useState(true);

    const getClansFromApi = async () => {
        try {
            const resJson = await getClans();
            setClans(resJson);
        } catch {
            openModalError();
        } finally {
            setShowLoader(false);
        }
    };

    useEffect(() => {
        getClansFromApi();
    }, []);

    return { clans, showLoader }
}