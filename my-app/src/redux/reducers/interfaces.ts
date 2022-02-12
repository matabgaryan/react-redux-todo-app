import rootReducer from "./index";

export interface ITodoStore {
  counter: number,
  list: ITodoItem[]
}

export interface ITodoItem{
  id: number,
  text: string,
  completed: boolean
}

export interface ITodoActionType {
  type: string,
  text: string,
  id: number
}

export type RootState = ReturnType<typeof rootReducer>

