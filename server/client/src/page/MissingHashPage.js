import { useParams } from 'react-router-dom';

export const MissingHashPage = () => {
    const { hashKey } = useParams();
    return (
        <>
        <h2>Missing Hash</h2>
        <p><strong>{hashKey}</strong> appears to not exist.</p>
        </>
    );
};