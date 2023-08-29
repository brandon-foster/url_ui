import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export const HashRedirectorPage = () => {
    const { hashKey } = useParams();
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        async function getOriginalUrl() {
            try {
                const response = await axios.get(`/api/shorturl/${hashKey}`);
                console.info(response.data);
                // window.location.href = response.data.originalUrl;
            }
            catch (error) {
                console.error(error);
                setIsError(true);
            }
        }
        getOriginalUrl();
    }, []);
    return (
        <>
            {isError && <p>An error occurred.</p>}
            <div className='spinner-grow text-center' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </>
    );
};