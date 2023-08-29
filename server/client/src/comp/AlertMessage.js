export const AlertMessage = ({ shortUrl }) => {
    return (
        <>
            <div className='alert alert-info alert-dismissible fade show fixed-top mb-0 rounded-0 text-center' role='alert'>
                <strong>Copied to clipboard</strong> <a href={shortUrl} target='_blank' rel='noreferrer'>{shortUrl}</a>
                <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
            </div>
        </>
    );
};