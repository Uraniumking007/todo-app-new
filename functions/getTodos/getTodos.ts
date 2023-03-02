import { Handler } from '@netlify/functions';
import { getXataClient } from '../../api/xata';
export const handler: Handler = async (event, context) => {
  // const { name = 'strangr' } = event.queryStringParameters;
  const xata = getXataClient();
  let allTodos = await xata.db['todo-list'].getAll();
  return {
    statusCode: 200,
    body: JSON.stringify(allTodos),
  };
};
