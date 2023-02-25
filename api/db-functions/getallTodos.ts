// Generated with CLI
import { getXataClient } from '../xata';

const xata = getXataClient();

export const getAllTodos = await xata.db["todo-list"].getAll();