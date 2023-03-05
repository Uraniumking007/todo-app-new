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
import { doDelete } from '../utils/doDelete';

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
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  div.className = 'w-full flex justify-center items-center';
  div1.className =
    'w-[55%] bg-Sunglow p-2 rounded-xl text-black m-1 shadow-lg shadow-black-500/50';
  div2.className =
    'bg-Sunglow p-2 rounded-full text-black m-1 shadow-lg shadow-black-500/50';
  div3.className =
    'bg-Sunglow p-2 rounded-full text-black m-1 shadow-lg shadow-black-500/50';
  todoEle.appendChild(div);
  div.appendChild(div1);
  div.appendChild(div2);
  div.appendChild(div3);
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
  const deleteBtn = document.createElement('img');
  // deleteBtn.className = 'bg-Olivine p-2 rounded text-red-500';
  // deleteBtn.id = todo.id;
  deleteBtn.src = 'public/delete.svg';
  deleteBtn.className = 'w-6';
  const editBtn = document.createElement('img');
  editBtn.src = 'public/edit.svg';
  editBtn.className = 'w-6';
  const saveBtn = document.createElement('img');
  saveBtn.src = 'public/save.svg';
  saveBtn.className = 'w-6 hidden';
  div1.appendChild(input);
  div1.appendChild(label);
  div2.appendChild(deleteBtn);
  div3.appendChild(editBtn);
  div3.appendChild(saveBtn);
  editBtn.addEventListener('click', () => {
    editBtn.classList.add('hidden');
    saveBtn.classList.remove('hidden');
    label.remove();
    const inputNewTask = document.createElement('input');
    inputNewTask.className = 'w-[90%] bg-white justify-center rounded-lg';
    div1.appendChild(inputNewTask);
    inputNewTask.value = todo.Task;
    saveBtn.addEventListener('click', () => {
      const newTask = {
        id: todo.id,
        Task: inputNewTask.value,
        isDone: todo.isDone,
      };
      updateTodos(newTask);
      updateTodoDOMElement();
    });
  });
  deleteBtn.addEventListener('click', () => {
    deleteTodo(todo.id);
    updateTodoDOMElement();
  });
  label.addEventListener('click', () => {
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
const deleteTodo = async (todoKey: string) => {
  await doDelete(todoKey);
  updateTodoDOMElement();
};
