import { Handler } from '@netlify/functions';
import { getXataClient } from '../../api/xata';

export const handler: Handler = async (event, context) => {
  try {
    const xata = getXataClient();
    const data = JSON.parse(`${event.body}`);
    const record = await xata.db['todo-list'].create(data);
    return {
      statusCode: 200,
      body: JSON.stringify(record),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 200,
      body: JSON.stringify(error),
    };
  }
};
