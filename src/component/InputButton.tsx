import React from "react";
import "../App.css";

export interface InputButtonProps {
  toDoList: string[];
  setToDoList: React.Dispatch<React.SetStateAction<string[]>>;
}
export function InputButton({ toDoList, setToDoList }: InputButtonProps) {
  const [query, setQuery] = React.useState("");

  const getInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const addToArray = () => {
    if (query.trim() !== "") {
      setToDoList([...toDoList, query]);
      setQuery("");
    }
  };

  return (
    <div className="input">
      <input value={query} onChange={getInput} />
      <button onClick={addToArray}>Submit</button>
    </div>
  );
}
