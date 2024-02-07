import { useState } from 'react';
import './App.css';
const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([])
  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleOnClick = () => {
    setTodos([...todos, inputValue])
    setInputValue("")
  }

  const handleDelete = (index) => {
    const updateTodos = todos.filter((todos, i) => i !== index)
    setTodos(updateTodos)
  }

  return (
    <div className='container'>
      <h2>To do</h2>
      <div className='container__input'>
        <input type="text" value={inputValue} onChange={handleOnChange} />
        <button className='btn-add' onClick={handleOnClick}>Add</button>
      </div>
      <ul>
        {
          todos.length > 0 ? todos.map((todo, index) => {
            return (
              <li key={index}>{todo}<button className='btn-delete' onClick={() => { handleDelete(index) }}>Delete</button></li>
            )
          })
            :
            <p>No hay tareas aún</p>
        }




      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <ToDo />
    </div>
  );
}

export default App;
