
// Task Form Component

import { useState } from 'react';
import axios from 'axios';


function TaskForm (props) {

// create your variables
    const [nameTask, setNameTask] = useState('');
    const [dateTask, setDateTask] = useState('');


// *** POST FUNCTION

    const sendTaskToServer = (event) => {
        event.preventDefault();
        console.log('POST /todo made');

    // verification of variable
        console.log(`in sendTaskToServer`, nameTask);
        console.log(`in sendTaskToServer`, dateTask);

    // object to be passed
        let taskObject = {
            title: nameTask,
            date: dateTask
        };
        console.log(`taskObject:`, taskObject);

    // axios post request
        axios.post('/todo', taskObject).then((response) => {

    // clear your inputs, objects and variables
        setNameTask('');
        setDateTask('');

        taskObject = {
            title: '',
            date: ''
        }
        console.log(`cleared taskObject:`, taskObject);


    // fetch the getTaskList function 
        props.getTaskList();
    

        }).catch((error) => {
            console.log(`/todo POST error`);
            alert(`/todo POST error`);
        });
    }

    return (
        <div id="task-form">
            <h2>Task Form:</h2>
            <form onSubmit={sendTaskToServer}>
                Title: <input 
                            value={nameTask} 
                            onChange={(e) => setNameTask(e.target.value)} 
                            placeholder={'your task here...'} 
                        />
                <p>{nameTask}</p>
                Date: <input 
                            value={dateTask}
                            onChange={(e) => setDateTask(e.target.value)}
                            placeholder={'10/24/2023'}
                        />
                <p>{dateTask}</p>
                <button>Add Task</button>
            </form>

        </div>
    )
}

export default TaskForm;