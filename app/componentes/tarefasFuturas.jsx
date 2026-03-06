'use client'
import{ useState } from "react";

export function TarefasFuturas({adicionarConcluida}){
    const [novaTarefa, setNovaTarefa] = useState("");
    const [tarefas, setTarefas] = useState([])

    return(
<div className="w-full h-50 overflow-y-auto">
    {/* linha do input mais botão*/}
    <div className="flex items-center">
        <input
            type="text"
            value={novaTarefa}
            onChange={e => setNovaTarefa(e.target.value)}
            placeholder="Adicione uma tarefa"
            className="
                w-[65%]
                bg-[var(--preto)] 
                mt-1 ml-5 
                placeholder:text-gray-400 
                text-xs"/>

            <button 
                onClick={() => {
                    if(novaTarefa.trim() === "") return;
                    setTarefas([...tarefas, novaTarefa]);
                    setNovaTarefa("");
                }}
                className="button mt-1 ml-1 bg-[var(--preto)]">
                <h4>Adicionar</h4>
            </button>
        </div>
        
        <div className="m-auto w-70 mt-1 flex flex-col gap-2 tasks">
            {tarefas.map((tarefa, index) => (
                <div
                key={index}
                onClick={() => {
                adicionarConcluida(tarefa);
                setTarefas(tarefas.filter((_, i) => i !== index))
                }} 
                className="bg-[var(--preto)] p-2 rounded text-sm wrap-break-word hover:bg-[var(--preto)]  hover:text-gray-500 cursor-pointer">
                    {tarefa}
                 </div>
            ))}
        </div>
</div>);}