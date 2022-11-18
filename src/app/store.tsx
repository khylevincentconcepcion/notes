import {
  createContext,
  useReducer,
  FC,
  Dispatch,
  PropsWithChildren,
  Reducer,
} from "react";
import { TodoReducer } from "./reducer";
import { TodoActions } from "./reducer.types";
import { InitialStateType } from "./store.types";

const initialState = {
  todos: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos") || "")
    : [],
};

export const Store = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<TodoActions>;
}>({ state: initialState, dispatch: () => null });

const MainReducer: Reducer<InitialStateType, TodoActions> = (
  { todos },
  action
) => ({
  todos: TodoReducer(todos, action as TodoActions),
});

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
