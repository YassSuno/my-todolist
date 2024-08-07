import React from "react";
import "../App.css";

export interface ToDoCardProps {
  value: string;
  index: number;
  setToDoList: React.Dispatch<React.SetStateAction<string[]>>;
  toDoList: string[];
}

export function ToDoCard({
  value,
  index,
  setToDoList,
  toDoList,
}: ToDoCardProps) {
  const handleDelete = () => {
    const newArr = toDoList.filter((_, indexValue) => indexValue !== index);
    setToDoList(newArr);
  };

  const handleEdit = () => {};

  return (
    <div>
      <p>{value}</p>
      <button>edit</button>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}
