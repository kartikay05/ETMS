import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = ()=> {
    const style_input = 'text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4';
    const style_head = 'text-sm text-gray-300 mb-0.5';
    
    const [userData, setUserData] = useContext(AuthContext);

    const[taskTitle, setTaskTitle] = useState('')
    const[taskDescription, setTaskDescription] = useState('')
    const[taskDate, setTaskDate] = useState('')
    const[assignTo, setAssignTo] = useState('')
    const[category, setCategory] = useState('')

    const[newTask, setNewTask] = useState({})

    const submitHandler = (e)=>{
        e.preventDefault();
        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })
        
        const data = userData;
        data.forEach(elem => {
            if (assignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        });
        setUserData(data)

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')
    }
 
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form
            onSubmit={(e)=>{
                submitHandler(e);
            }} 
             className='flex flex-wrap w-full items-start justify-between' >
                <div className='w-1/2'>
                    <div>
                        <h3 className={style_head}>Task Title</h3>
                        <input 
                        value={taskTitle}
                        onChange={(e)=>{
                            setTaskTitle(e.target.value)
                        }} 
                        className={style_input} type="text" placeholder='Enter Task Title' />
                    </div>
                    <div>
                        <h3 className={style_head}>Date</h3>
                        <input value={taskDate}
                        onChange={(e)=>{
                            setTaskDate(e.target.value)
                        }} 
                        className={style_input} type="date" name="date" id="date" />
                    </div>
                    <div>
                        <h3 className={style_head}>Assign To</h3>
                        <input value={assignTo}
                        onChange={(e)=>{
                            setAssignTo(e.target.value)
                        }} 
                        className={style_input} type="text" name='assign' id='assign' placeholder='Employee Name' />
                    </div>
                    <div>
                        <h3 className={style_head}>Category</h3>
                        <input value={category} 
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }} 
                        className={style_input} type="text" name='category' id='category' placeholder='design, dev etc.' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className={style_head}>Description</h3>
                    <textarea 
                    value={taskDescription}
                    onChange={(e)=>{
                        setTaskDescription(e.target.value)
                    }}
                    className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="desc" id="desc" placeholder='Enter Task Description'></textarea>
                    <button className='bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded text-sm mt-4 w-full' type="submit">Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask;