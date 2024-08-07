import React from "react";
import "../App.css";
import { ToDoCard } from "./ToDoCard";

export interface ToDoListProps {
  toDoList: string[];
  setToDoList: React.Dispatch<React.SetStateAction<string[]>>;
}

export function ToDoList({ toDoList, setToDoList }: ToDoListProps) {
  return (
    <div className="container">
      {/* show by .map */}
      {toDoList.map((value, index) => {
        return (
          <ToDoCard
            value={value}
            index={index}
            setToDoList={setToDoList}
            toDoList={toDoList}
          />
        );
      })}
    </div>
  );
}
