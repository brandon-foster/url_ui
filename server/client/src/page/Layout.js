import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <div className='container'>
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