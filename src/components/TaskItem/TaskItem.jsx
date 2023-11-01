

// Imports
import axios from 'axios';
import './TaskItem.css';

// TaskItem
function TaskItem(props) {

// Marks task as complete - PUT /todo/single/:id 
    const completeHandler = () => {
        console.log(`COMPLETE put /todo request for ${props.task.title}`);

     // no object to pass
        console.log(props.task.id);
        axios.put(`/todo/single/${props.task.id}`).then((response) => {
            console.log('success in PUT complete:', props.task.complete);

    // refresh your list
        props.getTaskList();

        }).catch((error) => {
            console.log('error in PUT complete', error);
            alert(`error in PUT complete`);
        });
    }


// Deletes a task from the list - DELETE /todo/single/:id
    const deleteHandler = () => {
        console.log(`DELETE /todo request for ${props.task.title}`);

        axios.delete(`/todo/single/${props.task.id}`).then(() => {
            console.log(`Delete /todo success!`);

        // refresh the dom here
            props.getTaskList();

        }).catch((error) => {
            console.log(`Delete /todo Error`);
            alert(`Delete /todo error`);
        });
    }


    return (
        <div id="task-item" className={props.task.complete ? 'completeItem' : 'incompleteItem'}>
            <div id="p-tags">
                {<p><span id="title-task">{props.task.title}</span></p>}
                {props.task.complete ? 
                    <p>Complete!</p> : 
                    <p className={props.task.priority === 'low' ? 'lowPriorityColor' : 'highPriorityColor'}>{props.task.priority} priority</p> }
            </div>
            <button id="complete-btn" onClick={completeHandler}>{props.task.complete? 'Unmark Task' : 'Mark Complete'}</button>
            <button id="delete-btn" onClick={deleteHandler}>X</button>
        </div>
    )
}

export default TaskItem;