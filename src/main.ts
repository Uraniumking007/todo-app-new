import './style.css';
import '@lottiefiles/lottie-player';
import {
  addBtn,
  animatedImage,
  inputTask,
  todoList,
  todoListTrue,
  addIMG,
  loadingIMG,
  TodoArr,
} from './var';
import { getTodos } from '../utils/getTodos';
import { insertTodo } from '../utils/insertTodos';
import { updateTodos } from '../utils/updateTodos';
import { doDelete } from '../utils/doDelete';
import setAttributes from '../utils/setAttributes';

let text: string = 'hello';

export const updateTodoDOMElement = async () => {
  await getTodos().then((allTodos: []) => {
    todoList.innerHTML = '';
    todoListTrue.innerHTML = '';
    allTodos.reverse().forEach((todo: TodoArr) => {
      if (todo.isDone) {
        createtodoDOM(todo, todoListTrue);
      } else {
        createtodoDOM(todo, todoList);
      }
    });
    console.log(allTodos);
    if (allTodos.length > 0) {
      animatedImage?.classList.add('hidden');
    } else {
      animatedImage?.classList.remove('hidden');
    }
  });
};

const createtodoDOM = (todo: TodoArr, todoEle: HTMLElement) => {
  const div = document.createElement('div');
  const div1 = document.createElement('div');
  const div2 = document.createElement('button');
  const div3 = document.createElement('button');
  div.className = 'w-full flex justify-center items-center';
  div1.className =
    'w-[55%] bg-Sunglow p-2 rounded-xl text-black m-1 shadow-lg shadow-black-500/50';
  div2.className =
    'bg-Sunglow p-2 rounded-full text-black m-1 shadow-lg shadow-black-500/50';
  div3.className =
    'bg-Sunglow p-2 rounded-full text-black m-1 shadow-lg shadow-black-500/50';

  todoEle.appendChild(div);
  div.append(div1, div2, div3);
  const input = document.createElement('input');

  setAttributes(input, {
    class: 'm-2',
    type: 'checkbox',
    id: todo.id,
    value: todo.Task,
  });
  input.checked = todo.isDone;

  const label = document.createElement('label');
  label.textContent = todo.Task;
  setAttributes(label, {
    for: todo.id,
  });

  textToggle(todo, label);
  const deleteBtn = document.createElement('img');
  setAttributes(deleteBtn, {
    src: '/delete.svg',
    class: 'w-6',
  });
  const editBtn = document.createElement('img');
  setAttributes(editBtn, {
    src: '/edit.svg',
    class: 'w-6',
  });
  const saveBtn = document.createElement('img');
  setAttributes(saveBtn, {
    src: '/save.svg',
    class: 'w-6 hidden',
  });
  div1.append(input, label);
  div2.appendChild(deleteBtn);
  div3.append(editBtn);
  div3.addEventListener('click', () => {
    div3.remove();
    const div4 = document.createElement('button');
    div4.className =
      'bg-Sunglow p-2 rounded-full text-black m-1 shadow-lg shadow-black-500/50';
    div.appendChild(div4);
    div4.append(saveBtn);
    editBtn.classList.add('hidden');
    saveBtn.classList.remove('hidden');
    label.remove();
    const inputNewTask = document.createElement('input');
    setAttributes(inputNewTask, {
      class: 'w-[90%] bg-white justify-center rounded-lg',
      value: todo.Task,
    });
    div1.appendChild(inputNewTask);
    div4.addEventListener('click', async () => {
      div4.disabled = true;
      saveBtn.src = '/loading.svg';
      updateTodos(todo.id, inputNewTask.value, todo.isDone);
    });
  });
  div2.addEventListener('click', () => {
    div2.disabled = true;
    deleteBtn.src = '/loading.svg';
    doDelete(todo.id);
  });
  label.addEventListener('click', async () => {
    await toggleTodo(todo, input);
    textToggle(todo, label);
    updateTodoDOMElement();
  });
};
updateTodoDOMElement();

addBtn.addEventListener('click', async () => {
  addBtn.disabled = true;
  loadingIMG.classList.remove('hidden');
  addIMG.classList.add('hidden');
  text = inputTask?.value;
  await insertTodo(text);
  updateTodoDOMElement().then(() => {
    inputTask.value = '';
    addBtn.disabled = false;
    loadingIMG.classList.add('hidden');
    addIMG.classList.remove('hidden');
  });
});

const textToggle = (todo: TodoArr, label: HTMLLabelElement) => {
  if (todo.isDone) {
    label.className += 'line-through text-muted opacity-75';
  } else {
    label.className.replace('line-through text-muted opacity-75', '');
  }
};

const toggleTodo = async (todo: TodoArr, input: HTMLInputElement) => {
  input.checked = !input.checked;
  todo.isDone = !todo.isDone;
  await updateTodos(todo.id, todo.Task, todo.isDone);
};
