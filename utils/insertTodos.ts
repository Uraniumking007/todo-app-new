export const insertTodo = async (task: string) => {
  const data = {
    Task: `${task}`,
    isDone: false,
  };
  try {
    await fetch('/.netlify/functions/insertItem', {
      method: 'POST',
      headers: { contentType: 'application/json' },
      body: JSON.stringify(data),
    });
    return console.log('Successfully inserted');
  } catch (error) {
    console.log(error);
  }
};
