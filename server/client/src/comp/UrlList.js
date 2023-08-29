import axios from 'axios';
import { useEffect, useState } from 'react';

import { toShortUrl } from '../util/toShortUrl';

export const UrlList = () => {
    console.info(`API_URL: ${process.env.REACT_APP_API_URL}`);
    const API_URL = process.env.REACT_APP_API_URL;
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [urlList, setUrlList] = useState(null);
    useEffect(() => {
        async function performGet() {
            try {
                const response = await axios.get(API_URL)
                console.info('retrieved all:');
                console.info([...response.data]);
                setUrlList([...response.data]);
                setIsLoading(false);
            }
            catch (error) {
                console.error(error);
                setIsError(true);
            }
        }
        performGet();
    }, [API_URL]);
    return (
        <>
            <h2>Url List</h2>
            {isLoading && !isError && <p>Loading...</p>}
            {isError && <p>An error occurred.</p>}
            {!isLoading &&
            <ul>
                {urlList.map((shorturl, index) => {
                    return <li key={index}><a href={toShortUrl(shorturl.hash)} target='_blank' rel='noreferrer'>{shorturl.hash}</a></li>
                })}
            </ul>}
        </>
    );
};