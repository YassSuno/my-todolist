import React, { Dispatch, SetStateAction } from "react";
import "../App.css";
import { SetOfToDoList } from "../App";

export interface ToDoCardProps {
  value: SetOfToDoList;
  index: number;
  setToDoList: React.Dispatch<React.SetStateAction<SetOfToDoList[]>>;
  toDoList: SetOfToDoList[];
}

export function ToDoCard({
  value,
  index,
  setToDoList,
  toDoList,
}: ToDoCardProps) {
  const [newName, setNewName] = React.useState(value.name);

  const handleCheck = () => {
    // setIsChecked(!isChecked);
    const x = toDoList.filter(
      (toDoList, indexToDoList) => indexToDoList !== index
    );
    const y = [...x, { ...value, isChecked: !value.isChecked }];
    setToDoList(y);
  };
  const handleDelete = () => {
    const x = toDoList.filter((_, indexToDoList) => indexToDoList !== index);
    setToDoList(x);
  };

  const handleEdit = () => {
    const x = toDoList.filter((_, indexToDoList) => indexToDoList !== index);
    const y = [...x, { ...value, isEditing: !value.isEditing }];
    setToDoList(y);
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  let editableToDoList = <p>{newName}</p>;

  if (value.isEditing) {
    editableToDoList = (
      <input
        required
        type="text"
        value={newName}
        onChange={handleChange}
      ></input>
    );
  }

  return (
    <div>
      <input type="checkbox" onClick={handleCheck} />
      {editableToDoList}
      <button onClick={handleEdit}>{value.isEditing ? "Save" : "Edit"}</button>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}
