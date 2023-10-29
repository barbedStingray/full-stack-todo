
// header Component


function Header(props) {
        
    const sortingByPriority = (event) => {
        console.log(`sorting list by priority`);

    // set your variable to direct your GET route
        console.log(`sortingHat`, props.sortingHat);
        props.setSortingHat('priority');

    // call the props.function to recall list
        props.getTaskList();

    }

    const sortingByAlphabetAsc = (event) => {
        console.log(`sorting asc. alphabetically`);

        props.setSortingHat('alphabetAsc');

        props.getTaskList();

    }

    function formAppear() {
        console.log(`opening form`);
      
        props.setPopUpWindow(true);
        console.log(`pop window:`, props.popUpWindow);
    }
      


   

    return (
        <div id="task-header">
            <div id="title-words">
                <h1>Witch Hunt</h1>
                <h5>a to-do app...</h5>
            </div>
            <div id="header-buttons">
                <button id="priority-btn" onClick={sortingByPriority}>Sort Priority</button>
                <button id="alphabetical-btn" onClick={sortingByAlphabetAsc}>Sort A to Z</button>
                <button id="add-task" onClick={formAppear}>+Task</button>
            </div>
        </div>
    )
}

export default Header;
