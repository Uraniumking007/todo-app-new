import './style.css';
import '@lottiefiles/lottie-player';
import { addBtn, animatedImage, inputTask, todoList } from './var';
import getTodos from '../api/db-functions/getallTodos';
import { insertTodo } from '../api/db-functions/insertTodo';
let text: string = 'hello';

const updateTodoList = () => {
  todoList.innerHTML = '';
  getTodos().then((getAllTodos) => {
    getAllTodos.forEach((todo) => {
      const div = document.createElement('div');
      todoList?.insertAdjacentHTML(
        'afterbegin',
        `      <div class="w-[60%] bg-Sunglow p-2 rounded-xl text-black m-1 shadow-lg shadow-black-500/50" id="xyz">
    <input type="checkbox" id="${todo.id}"/> ${todo.Task}
  </div>`
      );
    });
  });
};

if (document.readyState === 'complete') {
  updateTodoList();
}

addBtn?.addEventListener('click', () => {
  text = inputTask?.value;
  insertTodo(text);
  updateTodoList();
});
