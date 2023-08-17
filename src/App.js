import logo from "./logo.svg";
import "./App.css";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <h1>List Expenditure</h1>
      <Task />
      <TaskList />
    </div>
  );
}

export default App;
