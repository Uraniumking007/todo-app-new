import './style.css';
import '@lottiefiles/lottie-player';
import { addBtn, animatedImage, inputTask, todoList } from './var';
import { getTodos } from '../utils/getTodos';
import { insertTodo } from '../utils/insertTodos';
import { updateTodos } from '../utils/updateTodos';

let text: string = 'hello';

interface todoArr {
  id: string;
  Task: string;
  isDone: boolean;
}

const updateTodoList = async () => {
  const allTodos = await getTodos();
  todoList.innerHTML = '';
  allTodos.reverse().forEach((todo: todoArr) => {
    const div = document.createElement('div');
    div.className =
      'w-[60%] bg-Sunglow p-2 rounded-xl text-black m-1 shadow-lg shadow-black-500/50';
    div.id = todo.id;
    todoList.appendChild(div);
    const input = document.createElement('input');
    input.className = 'm-2';
    input.type = 'checkbox';
    input.id = todo.id;
    input.value = todo.Task;
    input.checked = todo.isDone;
    const label = document.createElement('label');
    label.htmlFor = todo.id;
    label.innerText = todo.Task;
    div.appendChild(input);
    div.appendChild(label);
    div.addEventListener('click', () => {
      if (input.checked === true) {
        // todo.isDone = true;
        input.checked = false;
        todo.isDone = false;
        toggleTodo(todo);
      } else {
        input.checked = true;
        todo.isDone = true;
        toggleTodo(todo);
      }
    });
  });
  if (allTodos != null) {
    animatedImage?.classList.add('hidden');
  } else {
    animatedImage?.classList.remove('hidden');
  }
};
const toggleTodo = (todo: todoArr) => {
  const inputTodo = {
    id: todo.id,
    Task: todo.Task,
    isDone: todo.isDone,
  };
  updateTodos(inputTodo);
};
updateTodoList();

addBtn?.addEventListener('click', async () => {
  text = inputTask?.value;
  insertTodo(text).then(updateTodoList);
  inputTask.value = '';
  // updateTodoList();
});
