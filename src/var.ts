export const animatedImage: HTMLElement | null =
  document.getElementById('animated-image');
export const todoList = document.getElementById('todo-list') as HTMLElement;
export const todoListTrue = document.getElementById(
  'todo-list-true'
) as HTMLElement;
export const addBtn: HTMLElement | null = document.getElementById('add-btn');
export const inputTask = document.getElementById(
  'input-Task'
) as HTMLInputElement;
export interface todoArr {
  id: string;
  Task: string;
  isDone: boolean;
}
