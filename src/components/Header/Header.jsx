
// header Component


function Header(props) {
        

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
                <button id="priority-btn" onClick={props.sortingByPriority}>Sort Priority</button>
                <button id="alphabetical-btn" onClick={props.sortingByAlphabetAsc}>Sort A to Z</button>
                <button id="add-task" onClick={formAppear}>+Task</button>
            </div>
        </div>
    )
}

export default Header;
