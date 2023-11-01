
// Imports
import { useState } from 'react';
import axios from 'axios';
import './TaskForm.css';

// TaskForm
function TaskForm (props) {

// useState variables
    const [nameTask, setNameTask] = useState(''); // two way data binding for task name
    const [priorityTask, setPriorityTask] = useState(''); // two way data binding for priority


// Add new form Item - POST /todo
    const sendTaskToServer = (event) => {
        event.preventDefault();
        console.log('POST /todo made');

        console.log(`in sendTaskToServer`, nameTask);
        console.log(`in sendTaskToServer`, priorityTask);

    // object to be passed
        let taskObject = {
            title: nameTask,
            priority: priorityTask
        };
        console.log(`taskObject:`, taskObject);

        axios.post('/todo', taskObject).then((response) => {

    // clear your inputs, objects and variables
        setNameTask('');

        taskObject = {
            title: '',
            priority: ''
        }
        console.log(`cleared taskObject:`, taskObject);

    // make your form Disappear
        props.setPopUpWindow(false);

    // fetch getTaskList 
        props.getTaskList();
    
        }).catch((error) => {
            console.log(`/todo POST error`);
            alert(`/todo POST error`);
        });
    }

// Input Form Display = False
function formDisappear() {
        console.log(`closing form`);
      
        props.setPopUpWindow(false);
        console.log(`pop window:`, props.popUpWindow);
      }
      
    return (
            <div className={props.popUpWindow ? 'revealFormWindow' : 'hideFormWindow'} id="witch-form">
                <div id="form-heading">
                    <h2>New Task</h2>
                </div>
                <div id="form-entries">
                    <form onSubmit={sendTaskToServer}>
                        <div id="input-nameTask">
                            {/* Title:  */}
                                    <input 
                                        id="input-style"
                                        value={nameTask} 
                                        onChange={(e) => setNameTask(e.target.value)} 
                                        placeholder={'your task here...'} 
                                    />
                            {/* <p>{nameTask}</p> */}
                        </div>
                        <div id="input-priorityTask">
                            {/* Priority:  */}
                                    <select 
                                        // placeholder={'priority'}
                                        id="select-style"
                                        onChange={(e) => setPriorityTask(e.target.value)}
                                        >
                                            <option value={''}>Select One...</option>
                                            <option value={'high'}>High</option>
                                            <option value={'low'}>Low</option>
                                    </select>
                            {/* <p>{priorityTask}</p> */}
                        </div>
                    <div id="post-task">
                        <button id="post-style">Post Task</button>
                    </div>
                    </form>
                </div>
                <div id="disappear-btn">
                    <button id="dButton-style" type="button" onClick={formDisappear}>Close</button>
                </div>
            </div>
    )
}

export default TaskForm;