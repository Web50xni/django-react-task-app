import React, { useEffect, useState } from 'react';
import { getAllTask, deleteTask } from '../api/task.api';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';


const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      try {
        const response = await getAllTask();
        setTasks(response.data);
      } catch (error) {
        console.error('Error to get tasks data:', error);
      }
    }

    loadTasks();
  }, []);

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter(task => task.id !== taskId));
      toast.success('task delete succesfully');
    } catch (error) {
      console.error('Error to delete a task:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
            <Link to={`/edit/${task.id}`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
