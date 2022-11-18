export type TodoActions =
  | { type: "ADD_TODO"; payload: string }
  | { type: "EDIT_TODO"; payload: { id: number; editTodo: string } }
  | { type: "REMOVE_TODO"; payload: number }
  | { type: "DONE_TODO"; payload: number };

export enum Types {
  ADD = "ADD_TODO",
  EDIT = "EDIT_TODO",
  REMOVE = "REMOVE_TODO",
  DONE = "DONE_TODO",
}
