export const getTodos = async () => {
  const todos = await fetch('/.netlify/functions/getTodos');
  return todos.json();
};
