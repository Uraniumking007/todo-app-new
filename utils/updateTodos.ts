import { updateTodoDOMElement } from '../src/main';

export const updateTodos = async (
  id: string,
  Task: string,
  isDone: boolean
) => {
  const data = {
    id: `${id}`,
    Task: `${Task}`,
    isDone: isDone,
  };
  try {
    await fetch('/.netlify/functions/updateItems', {
      method: 'POST',
      headers: { contentType: 'application/json' },
      body: JSON.stringify(data),
    });
    updateTodoDOMElement();
    return console.log('Successfully updated');
  } catch (error) {
    console.log(error);
  }
};
