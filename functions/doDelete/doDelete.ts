import { Handler } from '@netlify/functions';
import { getXataClient } from '../../api/xata';
import fetch from 'node-fetch';

export const handler: Handler = async (event, context) => {
  try {
    const xata = getXataClient();
    const data = JSON.parse(`${event.body}`);
    const allTodos = await xata.db['todo-list'].delete(data);
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
