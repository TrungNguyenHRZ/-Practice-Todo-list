import React from "react";
import { Button, Input, Select, Space } from "antd";

const AddTodo = () => {
  return (
    <>
      {" "}
      <Space.Compact style={{ width: "40%" }}>
        <Input placeholder="Enter your new task" />
        <Button type="primary">Add</Button>
      </Space.Compact>
    </>
  );
};

export default AddTodo;
