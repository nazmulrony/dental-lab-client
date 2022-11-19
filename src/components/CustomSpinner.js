import React from 'react';

const CustomSpinner = () => {
    return (
        <div className=' flex items-center justify-center min-h-screen'>
            <div className="w-8 h-8 border-b-2 border-ruby border-dashed rounded-full animate-spin"></div>
        </div>
    );
};

export default CustomSpinner;