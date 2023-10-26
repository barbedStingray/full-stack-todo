
// *** IMPORTS 

import {useState, useEffect} from 'react';
import axios from 'axios';
import TaskList from '../TaskList/TaskList.jsx';
import TaskForm from '../TaskForm/TaskForm.jsx';
import Header from '../Header/Header.jsx';
import './App.css';



// *** APP FUNCTION START

function App () {

// set initial constant for your List of Tasks... set to empty array.
  const [taskList, setTaskList] = useState([]);
  const [sortingHat, setSortingHat] = useState('');
  const [popUpWindow, setPopUpWindow] = useState(false);

  console.log(`sortingHat:`, sortingHat);


// GET REQUEST function ***********
  function getTaskList () {
    console.log(`GET /todo request made`);

    if(sortingHat === 'priority') {
      // GET /todo/priority
        axios.get('/todo/priority').then((response) => {
          console.log('GET /todo/priority response data:', response.data);

          setTaskList(response.data);

        }).catch((error) => {
          console.log(`/todo/priority GET error`, error);
          alert(`/todo/priority GET error`);
        });
    }
    else if(sortingHat === 'alphabetAsc') {
      // GET /todo/alphabetAsc
        axios.get('/todo/alphabetAsc').then((response) => {
          console.log(`GET /todo/alphabetAsc response:`, response.data);

          setTaskList(response.data);

        }).catch((error) => {
          console.log(`/todo/alphabetAsc GET error`);
          alert(`/todo/alphabetAsc GET error`);
        });
    }
    else {
      // *** GET /todo basic
        axios.get('/todo').then((response) => {
          console.log('GET /todo Match! response.data:', response.data);

          setTaskList(response.data);

        }).catch((error) => {
          console.log('Error GET /todo', error);
          alert(`GET /todo did not find a server match!`);
    });
  }
}

// call your function
// remember this takes two objects (don't forget empty array)
  useEffect(() => {
    getTaskList();
  }, []);



// modal Form Window

function formAppear() {
  console.log(`opening form`);

  setPopUpWindow(true);
  console.log(`pop window:`, popUpWindow);

  // document.getElementById("#witch-form").style.display = "block";
}
function formDisappear() {
  console.log(`closing form`);

  setPopUpWindow(false);
  console.log(`pop window:`, popUpWindow);

  // document.getElementById("#witch-form").style.display = "none";
}




  

// return to populate DOM

  return (
    <div id="web-display">
      
      <Header 
          sortingHat={sortingHat} 
          setSortingHat={setSortingHat}
          getTaskList={getTaskList}
      />

      <button className="open-button" onClick={formAppear}>Open Form</button>

      
      <TaskForm getTaskList={getTaskList}
                popUpWindow={popUpWindow}
                setPopUpWindow={setPopUpWindow}
                formDisappear={formDisappear} 
      />

      <div id="task-body">
                        
        <TaskList list={taskList} getTaskList={getTaskList} />

      </div>

    </div>

    
  );

}

// modal component
{/* <button onClick="document.getElementById('id01').style.display='block'"
className="w3-button">Open Modal</button>

<div id="id01" className="w3-modal">
  <div className="w3-modal-content">
    <div className="w3-container">
      <span onClick="document.getElementById('id01').style.display='none'" 
      className="w3-button w3-display-topright">&times;</span>
      <p>Some text in the Modal..</p>
      <p>Some text in the Modal..</p>
    </div>
  </div>
</div> */}


export default App
