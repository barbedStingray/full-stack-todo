
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


    return (
        <div id="button-bar">
                <button id="deleteTasks-btn">Clear All</button>
                <button id="resetList-btn">Reset List</button>
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