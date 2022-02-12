import React from "react";
import { useTodoItemHook } from "../hooks/useTodoItemHook";
import { ITodoItemProps } from "./interfaces";

const TodoItem: React.FC<ITodoItemProps> = ({ id, text, completed }: ITodoItemProps) => {
  const { handleDelete, handleToggle,  styled} = useTodoItemHook({ completed })

  return (
    <li
      style={styled}
      className="list-group-item text-capitalize d-flex justify-content-between my-2"
    >
      <h6>
        {text}
      </h6>
      <div className="todo-icon">
          <button
            className="fas fa-check-circle"
            onClick={() => handleToggle(id)}
          >Done</button>
          <button
            className="fas fa-trash"
            onClick={() => handleDelete(id)}
          >Remove</button>
      </div>
    </li>
  );
};

export default TodoItem;
