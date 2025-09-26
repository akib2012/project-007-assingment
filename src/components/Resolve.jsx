import React from 'react';

const Resolve = ({res}) => {
    
   
    return (
        <div className=' bg-white h-fit p-3 rounded-xl mb-4'>
            
            <div className='p-3 bg-gray-100  rounded-2xl shadow mt-6'>
                <h3 className='text-xl text-gray-400 pb-2.5'>{res.title}</h3>
                <p>✅ <span className='ml-3 text-xl font-semibold '>complted</span></p>

            </div>

        </div>
    );
};

export default Resolve;