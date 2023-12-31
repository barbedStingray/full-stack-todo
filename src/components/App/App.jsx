
// Imports

// hardware?
import {useState, useEffect} from 'react'; 
import axios from 'axios';

// components
import Header from '../Header/Header.jsx';
import ButtonBar from '../ButtonBar/ButtonBar.jsx';
import TaskForm from '../TaskForm/TaskForm.jsx';
import TaskList from '../TaskList/TaskList.jsx';  
import Footer from '../Footer/Footer.jsx';

// styles
import './App.css';




// *** APP FUNCTION START

function App () {

// useState variables
  const [taskList, setTaskList] = useState([]); // display array to dom
  const [popUpWindow, setPopUpWindow] = useState(false); // used to trigger input form
  const [sortingHat, setSortingHat] = useState(''); // used to sort the list

  console.log(`sortingHat:`, sortingHat);


// *** GET REQUEST  
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
    else if(sortingHat === 'complete') {
      // GET /todo/complete
        axios.get('todo/complete').then((response) => {
          console.log(`GET /todo/complete response:`, response.data);

          setTaskList(response.data);

        }).catch((error) => {
          console.log(`error GET /todo/complete`);
          alert(`error GET /todo/complete`);
        });
    }
    else {
      // *** GET /todo basic "time entered... default"
        axios.get('/todo').then((response) => {
          console.log('GET /todo Match! response.data:', response.data);

          setTaskList(response.data);

        }).catch((error) => {
          console.log('Error GET /todo', error);
          alert(`GET /todo did not find a server match!`);
    });
  }
}

// function call: your object / []
  useEffect(() => {
    getTaskList();
  }, []);


  return (
    <div id="web-display">
      
      <Header />

      <ButtonBar 
          sortingHat={sortingHat}
          setSortingHat={setSortingHat}
          getTaskList={getTaskList}
          popUpWindow={popUpWindow}
          setPopUpWindow={setPopUpWindow}
      />
      
      <TaskForm 
          getTaskList={getTaskList}
          popUpWindow={popUpWindow}
          setPopUpWindow={setPopUpWindow}
      />

      <TaskList 
          list={taskList} 
          getTaskList={getTaskList} 
      />

      <Footer />

    </div>
  );
}

export default App
