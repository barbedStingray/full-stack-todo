
// TaskItem component

// *** IMPORTS ***
import axios from 'axios'; // axios import
// import getTaskList from '../App/App.jsx'; // getTaskList() import
import './TaskItem.css';



function TaskItem(props) {

// PUT COMPLETE button execution /todo
    const completeHandler = () => {
        console.log(`COMPLETE put /todo request for ${props.task.title}`);

        // PUT request
        // no object to pass
        console.log(props.task.id);
        axios.put(`/todo/${props.task.id}`).then((response) => {
            console.log('success in PUT complete:', props.task.complete);

        // refresh your list
        props.getTaskList();

        }).catch((error) => {
            console.log('error in PUT complete', error);
            alert(`error in PUT complete`);
        });
    }


// DELETE button execution
    const deleteHandler = () => {
        console.log(`DELETE /todo request for ${props.task.title}`);

        // run your axios request based on props.key
        axios.delete(`/todo/${props.task.id}`).then(() => {
            console.log(`Delete /todo success!`);


        // refresh the dom here
            props.getTaskList();


        }).catch((error) => {
            console.log(`Delete /todo Error`);
            alert(`Delete /todo error`);
        });
    }



// return necessary with curly brackets
    return (
        <div id="task-item" className={props.task.complete ? 'completeItem' : 'incompleteItem'}>
            <div id="p-tags">
                <p><span id="title-task">{props.task.title}</span></p>
                <p>Priority: <span className="priorityColor">{props.task.priority}</span></p>
            </div>
            {/* <p>{props.task.date}</p> */}
            <button id="complete-btn" onClick={completeHandler}>Mark Complete</button>
            <button id="delete-btn" onClick={deleteHandler}>X</button>
        </div>
    )
}

// export your component
export default TaskItem;