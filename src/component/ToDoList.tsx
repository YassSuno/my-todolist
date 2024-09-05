import React, { Dispatch, SetStateAction } from "react";
import "../App.css";
import { ToDoCard } from "./ToDoCard";
import { SetOfToDoList } from "../App";

export interface ToDoListProps {
  toDoList: SetOfToDoList[];
  setToDoList: React.Dispatch<React.SetStateAction<SetOfToDoList[]>>;
}

export function ToDoList({ toDoList, setToDoList }: ToDoListProps) {
  // console.log("12345", toDoList);
  return (
    <div className="container">
      {/* show by .map */}
      {toDoList.map((value, index) => {
        return (
          <ToDoCard
            key={index}
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
