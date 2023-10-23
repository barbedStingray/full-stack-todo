
// TaskItem component

// *** IMPORTS ***
import axios from 'axios'; // axios import
// import getTaskList from '../App/App.jsx'; // getTaskList() import



function TaskItem(props) {

// PUT COMPLETE button execution
    const completeHandler = () => {
        console.log(`COMPLETE put /todo request for ${props.task}`);

        // todo axios PUT request
        // todo refresh the DOM
    }


// DELETE button execution
    const deleteHandler = () => {
        console.log(`DELETE /todo request for ${props.task}`);

        // run your axios request based on props.key
        axios.delete(`/todo/${props.tag}`).then(() => {
            console.log(`Delete /todo success!`);


        // todo refresh the dom here


        }).catch((error) => {
            console.log(`Delete /todo Error`);
            alert(`Delete /todo error`);
        });
    }



// return necessary with curly brackets
    return (
        <div id="task-item">
            <p>{props.task}</p>
            <p>{props.date}</p>
            <button id="complete-btn" onClick={completeHandler}>Complete!</button>
            <button id="delete-btn" onClick={deleteHandler}>X</button>
        </div>
    )
}

// export your component
export default TaskItem;