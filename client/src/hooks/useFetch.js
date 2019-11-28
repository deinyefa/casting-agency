import { useState, useEffect } from 'react';

export const useFetch = (url, defaultData, token, method='GET', body) => {
    const [data, updateData] = useState(defaultData);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url, {
                method: method,
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            updateData(await response.json())
        }
        fetchData()
    }, [url, token])

    return data
}