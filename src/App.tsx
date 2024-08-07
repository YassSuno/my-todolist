import React from "react";
import "./App.css";
import { Header } from "./component/Header";
import { InputButton } from "./component/InputButton";
import { ToDoList } from "./component/ToDoList";

export function App() {
  const [toDoList, setToDoList] = React.useState([]);

  return (
    <div>
      <Header />
      <InputButton toDoList={toDoList} setToDoList={setToDoList} />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

//   return (
//     <div>
//       <div>
//         <div className="App">TodoList</div>
//       </div>

//       <div className="input">
//         <input value={query} onChange={(e) => setQuery(e.target.value)} />
//         <button onClick={handleClick}>Submit</button>
//       </div>
//       <div>
//         {toDoList.map((val, index) => (
//           <div key={index}>
//             {val}
//             <div className="container">
//               <div className="buttons">
//                 <button>edit</button>
//                 <button onClick={() => handleDelete(index)}>delete</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

export default App;
