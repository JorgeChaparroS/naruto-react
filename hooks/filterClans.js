import { useState, useEffect } from "react";

export function useFilterClans({clans, keyWord}) {
    const [clansFiltered, setClansFiltered] = useState([]);

    useEffect(() => {
        const filterByName = () => {
            const searchBy = keyWord.toUpperCase();
            setClansFiltered(clans?.length > 0 ? clans?.filter(clan => clan?.name?.toUpperCase().includes(searchBy)) : []);
        };
        filterByName();
    }, [keyWord, clans]);

    return { clansFiltered };
}