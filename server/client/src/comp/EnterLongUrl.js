import axios from 'axios';
import { useState } from 'react';

export const EnterLongUrl = () => {
    const PLACEHOLDER = 'e.g., https://duckduckgo.com';
    const [originalUrl, setOriginalUrl] = useState('');
    function onSubmit(e) {
        function readPath(str) {
            return new URL(str).pathname;
        }
        e.preventDefault();
        const url = readPath(e.target.action);
        axios.post(url, {
            originalUrl: originalUrl,
        })
            .then(response => {
                console.info('created:');
                console.info(response);
            })
            .catch(error => console.error(error));
    }
    return (
        <>
        <form action='/api/shorturl' method='POST' onSubmit={e => onSubmit(e)}>
            <input
                className='form-control'
                type='text'
                placeholder={PLACEHOLDER}
                onChange={e => setOriginalUrl(e.target.value)}
                autoFocus></input>
            <button className='btn btn-primary form-control' type='submit'>GO</button>
        </form>
        </>
    );
};