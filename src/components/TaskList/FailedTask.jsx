import React from 'react';

function FailedTask({ data }) {
    return (
        <div className='flex-shrink-0 h-full p-5 w-[345px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-base mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-around mt-10'>
                <button className='bg-red-400 py-1 px-2 text-lg w-16 rounded'>Failed!</button>
            </div>
        </div>
    );
}

export default FailedTask;