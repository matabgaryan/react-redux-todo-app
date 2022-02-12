import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions";

export const useTodoItemHook = ({ completed } : { completed : boolean}) => {
  const dispatch = useDispatch();

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "#ffffff"
  };

  const handleDelete: (id: number) => void = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle: (id: number) => void = (id) => {
    dispatch(toggleTodo(id));
  };

  return {
    handleDelete,
    handleToggle,
    styled
  }
}
