import { useState } from 'react';
import { useEffect } from 'react';

import { EnterLongUrl } from '../comp/EnterLongUrl';
import { UrlList } from '../comp/UrlList';
import { DisplayShortUrl } from '../comp/DisplayShortUrl';

export const HomePage = ({ shortUrl, setShortUrl }) => {
    return (
        <>
            <EnterLongUrl setShortUrl={setShortUrl}></EnterLongUrl>
            {shortUrl && <DisplayShortUrl shortUrl={shortUrl}></DisplayShortUrl>}
            <UrlList></UrlList>
        </>
    );
};