import axios from 'axios';
import { useState } from 'react';

import { toShortUrl } from '../util/toShortUrl';

export const EnterLongUrl = ({ setShortUrl }) => {
    const clipboardManager = (function createClipboardManager() {
        async function setText(str) {
            try {
                await navigator.clipboard.writeText(str);
            }
            catch (error) {
                console.error(error);
            }
        }
        return {
            setText: setText,
        };
    }());
    const API_URL = process.env.REACT_APP_API_URL;
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
                console.info('invoking clipboardManager.setText()');
                const shortUrl = toShortUrl(response.data.hash);
                clipboardManager.setText(shortUrl);
                setShortUrl(shortUrl);
            })
            .catch(error => console.error(error));
    }
    return (
        <>
        <form action={API_URL} method='POST' onSubmit={e => onSubmit(e)}>
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