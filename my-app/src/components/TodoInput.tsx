import React  from "react";
import { useTodoInputHook } from "../hooks/useTodoInputHook";

const TodoInput: React.FC = () => {
  const {handleSubmit, text, setText} = useTodoInputHook()

  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book" />
            </div>
          </div>
          <input
            type="text"
            autoFocus={true}
            className="form-control text-capitalize todo-input"
            placeholder="add a todo item"
            name="todo"
            value={text}
            onChange={event => setText(event.target.value)}
          />
        </div>
        <button
          className="btn btn-block btn-primary mt-3"
          type='submit'
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
