import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {v4} from "uuid";
import Title from "./components/Title";

function App(){
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

function onTaskClick(taskId){
  const newTasks = tasks.map((task) => {
    if(task.id === taskId){
      return {...task, isCompleted: !task.isCompleted}
    }
    return task;
  });
  
  setTasks(newTasks);
}

function onDeleteTaskClick(taskId){
  const newTasks = tasks.filter((task) => task.id !== taskId);
  setTasks(newTasks);
}

function onAddTaskClick(title, description) {
  const newTask = {
    id: v4(),
    title,
    description,
    isCompleted: false,
  };
  setTasks([...tasks, newTask]);
}

  return (
    <div className="w-screen h-screen bg-slate-700 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Task Manager</Title>
        <AddTask onAddTaskClick={onAddTaskClick} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>

  )
}

export default App;