import './style.css';
import '@lottiefiles/lottie-player';
import {
  addBtn,
  animatedImage,
  inputTask,
  todoList,
  todoListTrue,
} from './var';
import { getTodos } from '../utils/getTodos';
import { insertTodo } from '../utils/insertTodos';
import { updateTodos } from '../utils/updateTodos';

let text: string = 'hello';

interface todoArr {
  id: string;
  Task: string;
  isDone: boolean;
}

const updateTodoDOMElement = async () => {
  const allTodos = await getTodos();
  todoList.innerHTML = '';
  todoListTrue.innerHTML = '';
  allTodos.reverse().forEach((todo: todoArr) => {
    if (todo.isDone === true) {
      createtodoDOM(todo, todoListTrue);
    } else {
      createtodoDOM(todo, todoList);
    }
  });
  if (allTodos != null) {
    animatedImage?.classList.add('hidden');
  } else {
    animatedImage?.classList.remove('hidden');
  }
};
const createtodoDOM = (todo: todoArr, todoEle: HTMLElement) => {
  const div = document.createElement('div');
  div.className =
    'w-[60%] bg-Sunglow p-2 rounded-xl text-black m-1 shadow-lg shadow-black-500/50';
  div.id = todo.id;
  todoEle.appendChild(div);
  const input = document.createElement('input');
  input.className = 'm-2';
  input.type = 'checkbox';
  input.id = todo.id;
  input.value = todo.Task;
  input.checked = todo.isDone;
  const label = document.createElement('label');
  label.htmlFor = todo.id;
  label.innerText = todo.Task;
  textToggle(todo, label);
  div.appendChild(input);
  div.appendChild(label);
  div.addEventListener('click', () => {
    toggleTodo(todo, input);
    textToggle(todo, label);
    updateTodoDOMElement();
  });
};
updateTodoDOMElement();

addBtn?.addEventListener('click', async () => {
  text = inputTask?.value;
  insertTodo(text).then(updateTodoDOMElement);
  inputTask.value = '';
});

const textToggle = (todo: todoArr, label: HTMLLabelElement) => {
  if (todo.isDone === true) {
    label.classList.add('line-through');
    label.classList.add('text-muted');
    label.classList.add('opacity-75');
  } else {
    label.classList.remove('line-through');
    label.classList.remove('text-muted');
    label.classList.remove('opacity-75');
  }
};
const toggleTodo = (todo: todoArr, input: HTMLInputElement) => {
  if (input.checked === true) {
    input.checked = false;
    todo.isDone = false;
  } else {
    input.checked = true;
    todo.isDone = true;
  }
  const inputTodo = {
    id: todo.id,
    Task: todo.Task,
    isDone: todo.isDone,
  };
  updateTodos(inputTodo);
};
