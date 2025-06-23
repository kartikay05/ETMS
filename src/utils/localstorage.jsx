const employees = [
    {
        "id": 1,
        "firstName": "Ankit",
        "email": "ankit@email.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            
        ]
    },
    {
        "id": 2,
        "firstName": "Asgar",
        "email": "asgar@email.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            
        ]
    },
    {
        "id": 3,
        "firstName": "Ankush",
        "email": "ankush@email.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            
        ]
    },
    {
        "id": 4,
        "firstName": "Jamal",
        "email": "jamal@email.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            
        ]
    },
    {
        "id": 5,
        "firstName": "Reema",
        "email": "reema@email.com",
        "password": "123",
        "taskCounts": {
            "active": 0,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            
        ]
    }
];


const admin = [{
    "id": 1,
    "firstName": "Admin",
    "email": "admin@me.com",
    "password": "123"
}];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}