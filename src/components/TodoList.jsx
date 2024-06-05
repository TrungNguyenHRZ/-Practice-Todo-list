import React, { useEffect, useState } from "react";
import { Avatar, List, Button } from "antd";
import ApiTodoInstance from "../service/api/ApiTodoInstance";
const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    ApiTodoInstance.get("").then((response) => {
      console.log(response.data);
      setTodoList(response.data);
    });
  }, [TodoList]);

  return (
    <div className="todo-list">
      <List
        itemLayout="horizontal"
        dataSource={todoList}
        renderItem={(item, index) => (
          <List.Item key={item.id}>
            <List.Item.Meta title={<p>{item.TodoContent}</p>} />
            <div className="todo-list-actions">
              <Button type="primary">Complete</Button>
              <Button danger>Delete</Button>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
