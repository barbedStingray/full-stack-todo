// TaskList component 

// todo import TaskItem into this file
import TaskItem from '../TaskItem/TaskItem.jsx';

// import your props (list = taskList = response.data from SQL)

function TaskList(props) {

    

    // return necessary when using curly brackets
    // using .map to "for of" loop through each task of the taskList
    // in the loop, assign the props to be passed down to TaskItem component
    return (
    <div id="task-list">
            {
                props.list.map((task) => (<TaskItem key={task.id} task={task.title} date={task.date} tag={task.id} />))
            }
    </div>
    )
}

// export TaskList to App.jsx
export default TaskList;