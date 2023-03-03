import { Handler } from '@netlify/functions';
import { getXataClient } from '../../api/xata';
export const handler: Handler = async (event, context) => {
  try {
    const xata = getXataClient();
    const allTodos = await xata.db['todo-list'].getAll();
    return {
      statusCode: 200,
      body: JSON.stringify(allTodos),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
