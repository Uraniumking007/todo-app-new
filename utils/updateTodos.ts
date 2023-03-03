import fetch from 'node-fetch';
import { todoArr } from '../src/var';

export const updateTodos = async (todo: todoArr) => {
  const data = {
    id: `${todo.id}`,
    Task: `${todo.Task}`,
    isDone: todo.isDone,
  };
  try {
    await fetch('/.netlify/functions/updateItems', {
      method: 'POST',
      headers: { contentType: 'application/json' },
      body: JSON.stringify(data),
    });
    return console.log('Successfully updated');
  } catch (error) {
    console.log(error);
  }
};
