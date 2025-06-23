import React, { useState } from 'react';
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
import Footer from '../Other/Footer';


const EmployeeDashboard = (props) =>{
    // console.log(props.data);
    return ( 
        <div className='p-10 bg-[#1c1c1c1] h-screen'>
            <Header changeUser={props.changeUser} data={props.data} />
            <TaskListNumbers data={props.data} />
            <TaskList data={props.data} />
            <Footer />
        </div>
     );
}

export default EmployeeDashboard;