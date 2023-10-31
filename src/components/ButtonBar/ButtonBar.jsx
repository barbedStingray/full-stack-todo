
import axios from 'axios';
// component for button bar

function ButtonBar(props) {

    function formAppear() {
        console.log(`opening form`);
      
        props.setPopUpWindow(true);
        console.log(`pop window:`, props.popUpWindow);
    }

    const sortTheSortingHat = () => {
        console.log(`sorting the sortingHat:`, props.sortingHat);
      
        props.getTaskList();
      }

    const deleteAllTasks = () => {
        console.log(`deleting ALL tasks`);

        axios.delete(`/todo/deleteAll`).then(() => {
            console.log(`/todo/deleteAll DELETE success`);

            props.getTaskList();

        }).catch((error) => {
            console.log(`DELETE /todo/deleteAll error`);
            alert(`DELETE /todo/deleteAll error`);
        });
    }

    const resetListComplete = () => {
        console.log(`resetting todo tasks to incomplete`);

        axios.put(`/todo/resetAll`).then((response) => {
            console.log(`success in /resetAll`);

            props.getTaskList();

        }).catch((error) => {
            console.log(`Error /todo/resetAll`);
            alert(`/todo/resetAll Error`);
        });
    }


    return (
        <div id="button-bar">
                
                <button 
                    id="deleteTasks-btn"
                    onClick={deleteAllTasks}
                    >Clear All
                </button>

                <button 
                    id="resetList-btn"
                    onClick={resetListComplete}
                    >Reset List
                </button>
                
                <button id="add-task" onClick={formAppear}>+Task</button>

                <select
                    onChange={(e) => props.setSortingHat(e.target.value)}
                    id="sortSelect-style"
                >
                    <option>by ID</option>
                    <option value="alphabetAsc">A to Z</option>
                    <option value="priority">Priority</option>
                    <option value="complete">Complete</option>
                </select>

                <button id="sort-btn" onClick={sortTheSortingHat}>Sort</button>
        </div>
    )
}

export default ButtonBar;