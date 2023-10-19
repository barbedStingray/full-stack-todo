import {useState, useEffect} from 'react';
import axios from 'axios';
import TodoListItem from '../TodoListItem/TodoListItem.jsx';

function App () {


  const [todoList, settodoList] = useState([]);


  const getTodoList = () => {
    axios.get('/todo').then((response) => {
      console.log(`GET request /todo made`, response.data);

  // set your const todoList to the response data
      settodoList(response.data);
    }).catch((error) => {
      console.log(`GET /todo ERROR`, error);
      alert(`getTodoList went awry!`);
    });
  }

  // call your function
  useEffect(() => {
    getTodoList();
  }, []);
  
  return (
    <div>
      <h1>TO DO APP</h1>

      {todoList[0].name}
    </div>
  );

}

export default App
