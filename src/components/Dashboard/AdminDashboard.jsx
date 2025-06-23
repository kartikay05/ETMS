import React from 'react';
import Header from '../Other/Header';
import CreateTask from '../Other/CreateTask';
import AllTask from '../Other/AllTask';
import Footer from '../Other/Footer';

function AdminDashboard(props) {
    return (
        <div className='w-full h-screen p-7 overflow-auto scrollbar' >
            {/* console.log({data}); */}
           
            <Header changeUser={props.changeUser} data={props.data} />
            <CreateTask  />
            <AllTask  />
            <Footer />
        </div>
    );
}

export default AdminDashboard;