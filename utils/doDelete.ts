import { updateTodoDOMElement } from '../src/main';

export const doDelete = async (key: string) => {
  try {
    await fetch('/.netlify/functions/doDelete', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(key),
    });
    updateTodoDOMElement();
    return console.log('Delete successfully');
  } catch (error) {
    return console.error(error);
  }
};
