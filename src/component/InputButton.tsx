import React from "react";
import "../App.css";
import { SetOfToDoList } from "../App";

export interface InputButtonProps {
  toDoList: SetOfToDoList[];
  setToDoList: React.Dispatch<React.SetStateAction<SetOfToDoList[]>>;
}

export interface NewSetOfToDoList {
  isChecked: boolean;
  name: string;
  isEditing: boolean;
  isDeleted: boolean;
}

export function InputButton({ toDoList, setToDoList }: InputButtonProps) {
  const [query, setQuery] = React.useState("");

  const getInput = (event) => {
    setQuery(event.target.value);
  };

  const addToArray = () => {
    setToDoList([
      ...toDoList,
      {
        isChecked: false,
        name: query,
        isEditing: false,
        isDeleted: false,
      },
    ]);
    setQuery("");
  };
  // const [query, setQuery] = React.useState<NewSetOfToDoList>({
  //   isChecked: false,
  //   name: "",
  //   isEditing: false,
  //   isDeleted: false,
  // });

  // const getInput = (event) => {
  //   setQuery({
  //     isChecked: false,
  //     name: event.target.value,
  //     isEditing: false,
  //     isDeleted: false,
  //   });
  // };

  // const addToArray = () => {
  //   setToDoList([...toDoList, query]);
  //   setQuery({
  //     isChecked: false,
  //     name: "",
  //     isEditing: false,
  //     isDeleted: false,
  //   });
  // };

  return (
    <div className="input">
      <input required value={query} onChange={getInput} />
      <button onClick={addToArray}>Submit</button>
    </div>
  );
}
