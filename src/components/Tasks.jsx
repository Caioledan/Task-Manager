import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button_tasks from "./Button_tasks";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {

    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
        
    }

    if (tasks.length > 0) {
        return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                <button onClick={() => onTaskClick(task.id)} className={`bg-slate-400 text-left w-full text-white p-2 rounded-md cursor-pointer hover:scale-95 duration-100 ${task.isCompleted && "line-through"}`}>
                    {task.title}
                </button>
                <Button_tasks onClick={() => onSeeDetailsClick(task)} ><ChevronRightIcon /></Button_tasks>
                <Button_tasks onClick={() => onDeleteTaskClick(task.id)} ><Trash /></Button_tasks>
                </li>
            ))}
        </ul>
        );
    }
}

export default Tasks;