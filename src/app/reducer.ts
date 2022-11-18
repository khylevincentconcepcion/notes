import { Reducer } from "react";
import { Todo } from "../models/todo.types";
import { TodoActions, Types } from "./reducer.types";

export const TodoReducer: Reducer<Todo[], TodoActions> = (state, action) => {
  switch (action.type) {
    case Types.ADD:
      const addTodo = [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
      localStorage.setItem("todos", JSON.stringify(addTodo));
      return addTodo;
    case Types.EDIT:
      const newTodo = state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.editTodo }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;
    case Types.REMOVE:
      const newTodos = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    case Types.DONE:
      const doneTodo = state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
      localStorage.setItem("todos", JSON.stringify(doneTodo));
      return doneTodo;
    default:
      return state;
  }
};
