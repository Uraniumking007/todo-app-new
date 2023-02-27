// Generated with CLI
import { getXataClient } from '../xata';
import { addBtn } from '../../src/var';
const xata = getXataClient();
// let getAllTodos

async function getTodos() {
    let getAllTodos = await xata.db["todo-list"].getAll();
    return getAllTodos
}

export default getTodos;