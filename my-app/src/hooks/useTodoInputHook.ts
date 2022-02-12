import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export const useTodoInputHook = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void = (event) => {
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
    }
    event.preventDefault();
  };

  return{
    handleSubmit,
    text,
    setText,
  }
}
