
// TaskItem component

// *** IMPORTS ***
import axios from 'axios'; // axios import
// import getTaskList from '../App/App.jsx'; // getTaskList() import



function TaskItem(props) {

// PUT COMPLETE button execution
    const completeHandler = () => {
        console.log(`COMPLETE put /todo request for ${props.task.title}`);

        // todo axios PUT request
        // todo refresh the DOM

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
        <div id="task-item">
            <p>{props.task.title}</p>
            <p>{props.task.priority}</p>
            <p>{props.task.date}</p>
            <button id="complete-btn" onClick={completeHandler}>Complete!</button>
            <button id="delete-btn" onClick={deleteHandler}>X</button>
        </div>
    )
}

// export your component
export default TaskItem;