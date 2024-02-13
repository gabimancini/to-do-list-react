import { useState, useRef } from 'react';
import './App.css';

const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const task = useRef(null);

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

  const handleEdit = () => {
    task.current.contentEditable = true;
    setIsClicked(true)
  }

  const handleUpdateEdit = () => {
    task.current.contentEditable = false;
    setIsClicked(false)
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
              <li ref={task} key={index}>{todo}
                <span>
                  {!isClicked ? <button className='btn-edit' onClick={handleEdit}>Edit</button> :
                    <button className='btn-edit' onClick={handleUpdateEdit}>Update</button>}
                  <button className='btn-delete' onClick={() => { handleDelete(index) }}>x</button>
                </span>
              </li>
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