import {
  ADD_TODO,
  CLEAR_TODO_LIST,
  DELETE_TODO,
  TOGGLE_TODO
} from "./actions.types";

export const addTodo: (text: string) => void = (text: string) => {
  return {
    type: ADD_TODO,
    text
  };
};

export const clearTodoList = () => {
  return {
    type: CLEAR_TODO_LIST
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: DELETE_TODO,
    id
  };
};

export const toggleTodo = (id: number) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};
