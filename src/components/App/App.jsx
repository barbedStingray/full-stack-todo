
// *** IMPORTS 

import {useState, useEffect} from 'react';
import axios from 'axios';
import TaskList from '../TaskList/TaskList.jsx';
import TaskForm from '../TaskForm/TaskForm.jsx';
import Header from '../Header/Header.jsx';
import './App.css';
import Footer from '../Footer/Footer.jsx';



// *** APP FUNCTION START

function App () {

// set initial constant for your List of Tasks... set to empty array.
  const [taskList, setTaskList] = useState([]);
  const [popUpWindow, setPopUpWindow] = useState(false);

  let sortingHat;
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




  const sortingByPriority = () => {
    console.log(`sorting list by priority`);

// set your variable to direct your GET route
    console.log(`sortingHat before:`, sortingHat);

    sortingHat = 'priority';

// call the props.function to recall list
    getTaskList();

}

const sortingByAlphabetAsc = () => {
  console.log(`sorting asc. alphabetically`);

  sortingHat = 'alphabetAsc';

  getTaskList();

}






// form window

function formDisappear() {
  console.log(`closing form`);

  setPopUpWindow(false);
  console.log(`pop window:`, popUpWindow);
}





// return to populate DOM

  return (
    <div id="web-display">
      
      <Header 
          sortingHat={sortingHat} 
          getTaskList={getTaskList}
          popUpWindow={popUpWindow}
          setPopUpWindow={setPopUpWindow}
          sortingByPriority={sortingByPriority}
          sortingByAlphabetAsc={sortingByAlphabetAsc}
      />
      
      <TaskForm getTaskList={getTaskList}
                popUpWindow={popUpWindow}
                setPopUpWindow={setPopUpWindow}
                formDisappear={formDisappear} 
      />

      <TaskList list={taskList} getTaskList={getTaskList} />

      <Footer />

    </div>

    
  );

}

export default App
