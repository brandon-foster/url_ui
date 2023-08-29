export const DisplayShortUrl = ({ shortUrl }) => {
    return (
        <>
            <div className='mt-4' tabIndex='-1'>
                <div className='modal-dialog'>
                    <div className='modal-content text-center'>
                        <div>
                            <a className='btn btn-lg btn-success' href={shortUrl} target='_blank' rel='noreferrer'>{shortUrl}</a>
                        </div>
                        <div className='modal-body'>
                            <p><i className="bi bi-clipboard-check"></i> Copied to clipboard</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
