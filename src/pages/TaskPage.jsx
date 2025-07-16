import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    return (
        <div className="bg-slate-700 h-screen w-screen p-6 flex justify-center">
            <div className="w-[500px] space-y-4">
                <Title>Detalhes da tarefa</Title>

                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl font-bold text-slate-700">{title}</h2>
                    <p className="text-slate-600">{description}</p>
                </div>
                <div className="flex justify-center">
                    <button onClick={() => navigate(-1)} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer hover:scale-95 duration-100">Voltar</button>
                    </div>
                
                
            </div>
        </div>
    )
}

export default TaskPage;