import { useDispatch, useSelector } from "react-redux";
import { clearTodoList } from "../redux/actions";
import { RootState } from "../redux/reducers/interfaces";

export const useTodoListHook = () => {
  const { list } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearTodoList());
  };

  return{
    list,
    handleClearList,
  }
}
