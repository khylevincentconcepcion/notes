import { Todo } from "../../models/todo.types";

export interface Props {
  todo: Todo;
}

export interface isDone {
  (id: number): void;
}

export interface IDelete {
  (id: number): void;
}

export interface IEdit {
  (e: React.FormEvent, id: number): void;
}
