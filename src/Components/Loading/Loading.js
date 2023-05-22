import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className='text-center spiner-pt'>
            <div className="spinner-grow spiner-color" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;