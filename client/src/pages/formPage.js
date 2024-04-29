import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createTask, updateTask } from '../api/task.api'; 

const FormPage = ({ taskToEdit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = handleSubmit(async data => {
    try {
      if (taskToEdit) {
        await updateTask(taskToEdit.id, data);
        setSuccessMessage('The task was successfully updated');
      } else {
        await createTask(data);
        setSuccessMessage('The task was successfully created');
      }
      reset();
    } catch (error) {
      console.error('Error creating/updating task:', error);
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='Title' {...register("title", { required: true })} defaultValue={taskToEdit ? taskToEdit.title : ''}></input>
        {errors.title && <span>This is required</span>}
        <textarea rows={4} placeholder='Description' {...register("description", { required: true })} defaultValue={taskToEdit ? taskToEdit.description : ''}></textarea>
        {errors.description && <span>This is required</span>}
        <input type='submit' value={taskToEdit ? 'Actualizar Tarea' : 'Crear Tarea'}></input>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default FormPage;
