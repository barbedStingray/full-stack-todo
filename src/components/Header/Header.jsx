
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

    const sortingByDate = (event) => {
        console.log(`sorting by date`);
    }
   

    return (
        <div id="task-header">
            <h1>Witch Hunt</h1>
            <div id="header-buttons">
                <button id="priority-btn" onClick={sortingByPriority}>Sort Priority</button>
                <button id="alphabetical-btn" onClick={sortingByAlphabetAsc}>Sort A to Z</button>
            </div>
        </div>
    )
}

export default Header;
