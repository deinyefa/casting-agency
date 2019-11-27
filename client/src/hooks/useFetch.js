import { useState, useEffect } from 'react';

export const useFetch = (url, defaultData, token, method='GET') => {
    const [data, updateData] = useState(defaultData);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url, {
                method: method,
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            updateData(await response.json())
        }
        fetchData()
    }, [url, token])

    return data
}