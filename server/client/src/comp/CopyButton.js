import clipboardManager from '../util/clipboardManager';

export const CopyButton = ({ textToCopy, setIsShortUrlCopied }) => {
    return (
        <button
                type='button'
                className='btn btn-outline-secondary'
                onClick={() => {
                    console.info(`CopyButton copying: ${textToCopy}`);
                    const isCopySuccessful = clipboardManager.setText(textToCopy);
                    setIsShortUrlCopied(isCopySuccessful);
                }}>
            <i className='bi bi-clipboard'></i>
        </button>
    );
};