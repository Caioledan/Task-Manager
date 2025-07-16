import { useState } from "react";
import Input from "./Input";

function AddTask( {onAddTaskClick} ){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input type="text" placeholder="Digite o título da tarefa" value={title} onChange={(event) => setTitle(event.target.value)}/>
            <Input type="text" placeholder="Digite a descrição da tarefa" value={description} onChange={(event) => setDescription(event.target.value)}/>
            <button onClick={() => {
                if (!title.trim() || !description.trim()) {
                    return alert("Por favor, preencha todos os campos!");
                }
                onAddTaskClick(title, description);
                setTitle("");
                setDescription("");
            }} 
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:scale-95 duration-100">
                Adicionar
                </button>
        </div>
    )
}

export default AddTask;