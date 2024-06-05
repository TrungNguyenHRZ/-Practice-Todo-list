import React from "react";
import "../css/TodoPage.css";
import AddTodo from "../components/AddTodo";
import TodoList from "./../components/TodoList";
const TodoPage = () => {
  return (
    <>
      <h1 className="todo-page-header">Todo Page</h1>
      <div className="todo-page-content">
        <div className="todo-add">
          <AddTodo />
        </div>
        <div className="todo-list-container">
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default TodoPage;
