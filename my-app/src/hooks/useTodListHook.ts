import { useDispatch, useSelector } from "react-redux";
import { clearTodoList } from "../redux/actions";
import { RootState } from "../redux/reducers/interfaces";
import { useState } from "react";

export const useTodoListHook = () => {
  const { list } = useSelector((state: RootState) => state.todos);
  const [cleared, setCLeared] = useState(false);
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearTodoList());
    setCLeared(true)
  };

  return{
    list,
    handleClearList,
    cleared
  }
}
