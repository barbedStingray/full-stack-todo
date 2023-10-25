
// *** IMPORTS 

import {useState, useEffect} from 'react';
import axios from 'axios';
import TaskList from '../TaskList/TaskList.jsx';
import TaskForm from '../TaskForm/TaskForm.jsx';
import Header from '../Header/Header.jsx';



// *** APP FUNCTION START

function App () {

// set initial constant for your List of Tasks... set to empty array.
  const [taskList, setTaskList] = useState([]);


// create your axios GET client side function
  function getTaskList () {
    console.log(`GET /todo request made`);

    // axios request
        axios.get('/todo').then((response) => {
          console.log('GET /todo Match! response.data:', response.data);

    // set your constant
          setTaskList(response.data);

    // finish with the .catch
        }).catch((error) => {
          console.log('Error GET /todo', error);
          alert(`GET /todo did not find a server match!`);
        });
      }
  

// call your function
// remember this takes two objects (don't forget empty array)
  useEffect(() => {
    getTaskList();
  }, []);


// return to populate DOM

  return (
    <div id="web-display">
      
      <Header />

      <TaskForm getTaskList={getTaskList} />

      <div id="task-body">
        <h3>This is the Task Body</h3>
                
        <TaskList list={taskList} getTaskList={getTaskList} />

      </div>


    </div>

    
  );

}

export default App
