import React from 'react';

const CustomSpinner = () => {
    return (
        <div className=' grid place-items-center min-h-screen'>
            <button className="btn btn-lg bg-transparent border-none btn-square text-3xl text-ruby loading"></button>
        </div>
    );
};

export default CustomSpinner;