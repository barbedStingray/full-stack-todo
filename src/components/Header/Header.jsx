
// header Component

import axios from 'axios';


function Header(props) {
        
   

    return (
        <div id="task-header">
            <h1>To Do App Title</h1>
            <button>Sort Priority</button>
            <button>Sort A to Z</button>
            <button>Sort Z to A</button>
            <button>+Task</button>
        </div>
    )
}

export default Header;
