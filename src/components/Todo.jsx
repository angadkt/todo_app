import React,{useState} from 'react'

const todo = () => {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("")
  
    const handleInputChange = (event) => {
      setNewTask(event.target.value);
    }
  
    const handleAddTask = () => {
  
      if (task.length === 10) {
        alert("TODO LIST is full");
      } else if (newTask.trim() !== "") {
        setTask(t => [...t, newTask]);
        setNewTask("");
        document.getElementById("input-id").value = "";
      } else {
        alert("You should enter the task");
      }
    }
  
  
  
  
    const handleDeleteTask = (index) => {
      setTask(task.filter((_, i) => i !== index));
    }
  return (
    <div className='main-div'>

      <h1 className='todo-head'>TODO LIST</h1>

      <div className='input-div'>
        <input
          type="text"
          id='input-id'
          placeholder='enter the task..'
          onChange={handleInputChange} />

        <button
          onClick={handleAddTask}
          type='submit'>
          Add Task
        </button>
      </div>
      <ol>
        {task.map((item, index) => (
          <li key={index} >
            <span className="text-span">{item}</span>
            <button onClick={() => handleDeleteTask(index)}> X</button>
          </li>))}

      </ol>
    </div>
  )
}

export default todo
