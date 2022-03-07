import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions";
import { useState } from "react";
const colorBackground = '#A9A9A9';
const colorWhite = '#ffffff';

export const useTodoItemHook = ({ completed } : { completed : boolean}) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false)
  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? colorBackground : colorWhite
  };

  const handleDelete: (id: number) => void = (id) => {
    dispatch(deleteTodo(id));
    setToggle(false)
  };

  const handleToggle: (id: number) => void = (id) => {
    dispatch(toggleTodo(id));
    setToggle(true)
  };

  return {
    handleDelete,
    handleToggle,
    styled,
    toggle
  }
}
