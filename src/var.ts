export const animatedImage: HTMLElement | null =
  document.getElementById('animated-image');
export const todoList = document.getElementById('todo-list') as HTMLElement;
export const todoListTrue = document.getElementById(
  'todo-list-true'
) as HTMLElement;
export const addBtn = document.getElementById('add-btn') as HTMLButtonElement;
export const inputTask = document.getElementById(
  'input-Task'
) as HTMLInputElement;
export const addIMG = document.getElementById('add-img') as HTMLImageElement;
export const loadingIMG = document.getElementById(
  'loading-img'
) as HTMLImageElement;
export interface todoArr {
  id: string;
  Task: string;
  isDone: boolean;
}
