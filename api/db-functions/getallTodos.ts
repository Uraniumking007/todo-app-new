// Generated with CLI
import { getXataClient } from '../xata';
import { addBtn } from '../../src/var';
// let getAllTodos

async function getTodos() {
  const xata = getXataClient();
  let allTodos = await xata.db['todo-list'].getAll();
  return allTodos;
}

export default getTodos;
