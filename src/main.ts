import './style.css';
import '@lottiefiles/lottie-player';
import { addBtn, animatedImage, inputTask, todoList } from './var';
import { getTodos } from '../utils/getTodos';
import { insertTodo } from '../utils/insertTodos';
let text: string = 'hello';

interface todoArr {
  id: string;
  Task: string;
  isDone: boolean;
}

const updateTodoList = async () => {
  const allTodos = await getTodos();
  todoList.innerHTML = '';
  allTodos.forEach((todo: todoArr) => {
    const div = document.createElement('div');
    todoList?.insertAdjacentHTML(
      'afterbegin',
      `      <div class="w-[60%] bg-Sunglow p-2 rounded-xl text-black m-1 shadow-lg shadow-black-500/50" id="xyz">
    <input type="checkbox" id="${todo.id}"/> ${todo.Task}
  </div>`
    );
  });
  if (allTodos != null) {
    animatedImage?.classList.add('hidden');
  } else {
    animatedImage?.classList.remove('hidden');
  }
};

updateTodoList();

addBtn?.addEventListener('click', async () => {
  text = inputTask?.value;
  insertTodo(text).then(updateTodoList);
  inputTask.value = '';
  // updateTodoList();
});
