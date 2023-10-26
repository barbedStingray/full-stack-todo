
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
            <h1>To Do App Title</h1>
            <button onClick={sortingByPriority}>Sort Priority</button>
            <button onClick={sortingByAlphabetAsc}>Sort A to Z</button>
            <button onClick={sortingByDate}>Sort Date</button>
            <button>+Task</button>
        </div>
    )
}

export default Header;
