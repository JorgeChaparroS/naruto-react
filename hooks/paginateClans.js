import { useState, useEffect } from "react";

export function usePaginateClans({clansFiltered, currentPage}) {

    const [clansPaginated, setClansPaginated] = useState([]);
    const [enableNextPage, setEnableNextPage] = useState(false);

    const generatePaginationRecords = () => {
        const paginatedRecords = [];
        const offset = currentPage * 10;
        if (clansFiltered?.length > 0) {
            clansFiltered?.forEach((clan, index) => {
                if (index >= offset && index < offset + 10) {
                    paginatedRecords.push(clan); 
                }
            });
        }
        return paginatedRecords;
    };
    
    useEffect(() => {
        const paginatedRecords = generatePaginationRecords();
        const newEnableNextPage = paginatedRecords?.length > 9;
        setClansPaginated(paginatedRecords);
        setEnableNextPage(newEnableNextPage);
    }, [clansFiltered, currentPage]);

    return { clansPaginated, enableNextPage }; 
}