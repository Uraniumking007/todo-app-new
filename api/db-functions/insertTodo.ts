// Generated with CLI
import { getXataClient } from "../xata";
const xata = getXataClient();


// console.log(record);

export const insertTodo = async (task: string) => {
    const record = await xata.db["todo-list"].create({
      Task: `${task}`,
      isDone: false,
    });
}