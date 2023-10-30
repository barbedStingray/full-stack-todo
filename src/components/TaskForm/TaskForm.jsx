
// Task Form Component

import { useState } from 'react';
import axios from 'axios';


function TaskForm (props) {

// create your variables
    const [nameTask, setNameTask] = useState('');
    const [priorityTask, setPriorityTask] = useState('');


// *** POST FUNCTION

    const sendTaskToServer = (event) => {
        event.preventDefault();
        console.log('POST /todo made');

    // verification of variable
        console.log(`in sendTaskToServer`, nameTask);
        console.log(`in sendTaskToServer`, priorityTask);

    // object to be passed
        let taskObject = {
            title: nameTask,
            priority: priorityTask
        };
        console.log(`taskObject:`, taskObject);

    // axios post request
        axios.post('/todo', taskObject).then((response) => {

    // clear your inputs, objects and variables
        setNameTask('');

    // make your form Disappear
        props.setPopUpWindow(false);

    // setPriorityTask(''); // clears the variable, but does not reset select

        taskObject = {
            title: '',
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