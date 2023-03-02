import { Handler } from '@netlify/functions';
import { getXataClient } from '../../api/xata';
interface todoArr {
  id: string;
  Task: string;
  isDone: boolean;
}

export const handler: Handler = async (event, context) => {
  try {
    const xata = getXataClient();
    const data: todoArr = JSON.parse(`${event.body}`);
    // const id = event;
    const record = await xata.db['todo-list'].update(data.id, data);
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

// const record = await xata.db['todo-list'].update('rec_xyz', {
//   Task: 'longer text',
//   isDone: true,
// });
