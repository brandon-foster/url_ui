import { useState } from 'react';

import { EnterLongUrl } from '../comp/EnterLongUrl';
import { DisplayShortUrl } from '../comp/DisplayShortUrl';

export const HomePage = ({ shortUrl, setShortUrl }) => {
    const [isShortUrlCopied, setIsShortUrlCopied] = useState(false);
    return (
        <>
            <EnterLongUrl setShortUrl={setShortUrl} setIsShortUrlCopied={setIsShortUrlCopied}></EnterLongUrl>
            {shortUrl && <DisplayShortUrl shortUrl={shortUrl} isShortUrlCopied={isShortUrlCopied} setIsShortUrlCopied={setIsShortUrlCopied}></DisplayShortUrl>}
        </>
    );
};