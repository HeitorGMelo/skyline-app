export function TarefasConcluidas({concluidas}){
    return(
        <div className="m-4 flex flex-col gap-2">
            {concluidas.map((tarefa, index) => (
                <div key={index} className="bg-[var(--indigoEscuro)] p-2 rounded text-sm w-full">
                    {tarefa}
                </div>
            ))}
        </div>
    );
}