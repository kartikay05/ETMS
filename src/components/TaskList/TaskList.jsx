import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import CompletedTask from './CompleteTask';

function TaskList({ data }) {
    
    return (
        <div className='overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[62%] w-full py-5 px-2 mt-10 scrollbar' >
            {data.tasks.map((elem, idx)=>{
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompletedTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }
            })}
        </div>);
}

export default TaskList;