import { EnterLongUrl } from '../comp/EnterLongUrl';
import { DisplayShortUrl } from '../comp/DisplayShortUrl';

export const HomePage = ({ shortUrl, setShortUrl }) => {
    return (
        <>
            <EnterLongUrl setShortUrl={setShortUrl}></EnterLongUrl>
            {shortUrl && <DisplayShortUrl shortUrl={shortUrl}></DisplayShortUrl>}
        </>
    );
};