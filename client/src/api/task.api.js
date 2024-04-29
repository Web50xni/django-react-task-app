import axios from 'axios';

const task = axios.create({
    baseURL: 'http://localhost:8000/api/task/v1/tasks/'
});

export const getAllTask = () => {
    return task.get('/');
}

export const createTask = (newTaskData) => {
    return task.post('/', newTaskData);
}

export const deleteTask = (taskId) => {
    return task.delete(`/${taskId}`);
}

export const updateTask = (taskId, updatedTaskData) => {
    return task.put(`/${taskId}`, updatedTaskData);
}

export const getTaskById = (taskId) => {
    return task.get(`/${taskId}`);
}