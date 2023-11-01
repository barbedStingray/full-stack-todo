
// Imports
import TaskItem from '../TaskItem/TaskItem.jsx';

// TaskList
function TaskList(props) {


    return (
    <div id="task-list">
            {
                props.list.map((task) => 
                (<TaskItem 
                    key={task.id} 
                    task={task} 
                    getTaskList={props.getTaskList} 
                />))
            }
    </div>
    )
}

export default TaskList;