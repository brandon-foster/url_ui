import { Outlet } from 'react-router-dom';

export const Layout = ({ shortUrl }) => {
    return (
        <>
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