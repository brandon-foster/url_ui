import { EnterLongUrl } from '../comp/EnterLongUrl';
import { UrlList } from '../comp/UrlList';

export const HomePage = ({ setShortUrl }) => {
    return (
        <>
            <EnterLongUrl setShortUrl={setShortUrl}></EnterLongUrl>
            <UrlList></UrlList>
        </>
    );
};