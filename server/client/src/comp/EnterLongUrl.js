import axios from 'axios';
import { useState } from 'react';

export const EnterLongUrl = () => {
    const PLACEHOLDER = 'e.g., https://duckduckgo.com';
    const [originalUrl, setOriginalUrl] = useState('');
    function onSubmit(e) {
        function lastPath(str) {
            return `/${str.split('/').reverse()[0]}`;
        }
        e.preventDefault();
        const url = lastPath(e.target.action);
        axios.post(url, {
            originalUrl: originalUrl,
        })
            .then(response => console.info(response))
            .catch(error => console.error(error));
    }
    return (
        <>
        <form action='/api' method='POST' onSubmit={e => onSubmit(e)}>
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