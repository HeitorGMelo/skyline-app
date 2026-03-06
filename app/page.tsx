"use client"
import { useState } from "react";
/*Aqui vai o layout Mutavel, o children*/
import Image from "next/image";
import { TarefasSemanais } from "./componentes/tarefasSemanaisComponente"
import { TarefasDiarias } from "./componentes/tarefasDiariasComponente"
import { TarefasFuturas } from "./componentes/tarefasFuturas"
import { TarefasConcluidas } from "./componentes/tarefasConcluidas"

export default function Home() {
function LimparConcluidos(){
    setConcluidas([]);
}

const [concluidas, setConcluidas] = useState<string[]>([]);

function adicionarConcluidas(tarefa: string){
  console.log("clicou:", tarefa)
  setConcluidas([...concluidas, tarefa]);
}
  /*Página Mutável*/
  return <section className="bg-[var(--indigoMaisEscuro)] w-screen h-[92vh] flex">
      {/*Grid*/}
      <div id="gridPai" className="w-[85vw] h-[85%] flex m-auto text-white">
      
      {/*Tarefas Diárias*/}
          <div className="gridFilho [grid-area:A] bg-[var(--indigoEscuro)]">
            <div className="flex m-4 justify-between items-center">
              <h3>Tarefas Diárias</h3>
            </div>
            <TarefasDiarias adicionarConcluida={adicionarConcluidas}/>
          </div>

      
      
      {/*Tarefas Semanais*/}  
          <div className="gridFilho [grid-area:D] bg-[var(--indigoEscuro)] ">
            <div className="flex m-4 justify-between items-center">
              <h3>Semanais</h3>
            </div>
            <TarefasSemanais adicionarConcluida={adicionarConcluidas}/>
          </div>

      {/*Concluidas*/}
           <div className="gridFilho [grid-area:B] bg-[var(--indigoSuperEscuro)] relative">
              <h2 className="m-5">Concluídas</h2>

            <div className="flex flex-col m-4">
                <div>
                  <TarefasConcluidas concluidas={concluidas}/>

                  <img src="/imagens/trashIcon.svg" alt="Logo Skyline" className="h-14 absolute bottom-10 right-10 hover:brightness-80 hover:cursor-pointer"
                  onClick={LimparConcluidos}/>
                </div>

            </div>
           </div>

      {/*Tarefas Futuras*/} 
          <div className="gridFilho [grid-area:C] bg-[var(--indigoSuperEscuro)]">
            <div className="flex m-4">
              <h3>Futuras</h3>
            </div>
            <TarefasFuturas adicionarConcluida={adicionarConcluidas}/>
          </div>
        </div>
      </section>;
}
