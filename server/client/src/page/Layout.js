import { Outlet } from 'react-router-dom';
import { AlertMessage } from '../comp/AlertMessage';

export const Layout = ({ shortUrl }) => {
    return (
        <>
            {shortUrl && <AlertMessage shortUrl={shortUrl}></AlertMessage>}
            <div className='container mt-5'>
                <div className='row'>
                    <h1>Url Service</h1>
                </div>
                <div className='row'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};