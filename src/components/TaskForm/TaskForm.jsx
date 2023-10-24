
// Task Form Component

import { useState } from 'react';
import axios from 'axios';


function TaskForm (props) {

// create your variables
    const [nameTask, setNameTask] = useState('');
    const [dateTask, setDateTask] = useState('');
    const [priorityTask, setPriorityTask] = useState('');


// *** POST FUNCTION

    const sendTaskToServer = (event) => {
        event.preventDefault();
        console.log('POST /todo made');

    // verification of variable
        console.log(`in sendTaskToServer`, nameTask);
        console.log(`in sendTaskToServer`, dateTask);
        console.log(`in sendTaskToServer`, priorityTask);

    // object to be passed
        let taskObject = {
            title: nameTask,
            date: dateTask,
            priority: priorityTask
        };
        console.log(`taskObject:`, taskObject);

    // axios post request
        axios.post('/todo', taskObject).then((response) => {

    // clear your inputs, objects and variables
        setNameTask('');
        setDateTask('');
        // setPriorityTask(''); // clears the variable, but does not reset select

        taskObject = {
            title: '',
            date: '',
            priority: ''
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
                Priority: <select 
                            placeholder={'priority'}
                            onChange={(e) => setPriorityTask(e.target.value)}
                            >
                                <option value={''}>Select One...</option>
                                <option value={'high'}>High</option>
                                <option value={'low'}>Low</option>
                        </select>
                <p>{priorityTask}</p>
                <button>Add Task</button>
            </form>

        </div>
    )
}

export default TaskForm;