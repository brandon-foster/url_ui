import { CopyButton } from './CopyButton';
import { CopyConfirmation } from './CopyConfirmation';

export const DisplayShortUrl = ({ shortUrl, isShortUrlCopied, setIsShortUrlCopied }) => {
    return (
        <>
            <div className='mt-4' tabIndex='-1'>
                <div className='modal-dialog'>
                    <div className='modal-content text-center'>
                        <div>
                            <div className='input-group'>
                                <a className='form-control btn btn-lg btn-outline-secondary' href={shortUrl} target='_blank' rel='noreferrer'>{shortUrl}</a>
                                <CopyButton textToCopy={shortUrl} setIsShortUrlCopied={setIsShortUrlCopied}></CopyButton>
                            </div>
                        </div>
                        {isShortUrlCopied && <CopyConfirmation></CopyConfirmation>}
                    </div>
                </div>
            </div>
        </>
    );
};
