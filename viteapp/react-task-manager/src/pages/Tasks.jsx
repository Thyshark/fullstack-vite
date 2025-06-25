// pages/Tasks.jsx
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? task.completed
      : !task.completed
  );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Task Manager</h2>
      <input
        className="border p-2 mb-2"
        placeholder="Add task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="ml-2 bg-blue-600 text-white px-3 py-1"
        onClick={addTask}
      >
        Add
      </button>
      <div className="my-4 space-x-2">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <ul className="space-y-2">
        {filteredTasks.map((task, i) => (
          <li
            key={i}
            className={`p-2 border ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            <span onClick={() => toggleTask(i)}>{task.text}</span>
            <button className="ml-4 text-red-500" onClick={() => deleteTask(i)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
