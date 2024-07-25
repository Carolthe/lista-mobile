import { useState, useEffect } from "react"
import Logo from "./img/Logo.png"
import Tasks from "./components/Tasks"
import Primary from "./Primary"

export default function Header (){

    const [input, setInput] = useState ("")
    const [adicionarInputs, setAdicionarInputs] = useState (JSON.parse(localStorage.getItem('tasks') || '[]'))

    function adicionarTasks (){
        setAdicionarInputs([...adicionarInputs, input])
    }
    useEffect(()=>{
        localStorage.setItem ("tasks", JSON.stringify(adicionarInputs))
       
    },[adicionarInputs])

    function removerTask (){
         localStorage.removeItem("tasks")
    }

    return(
        <div className="flex flex-col justify-center items-center w-full ">
           <div></div>
             <img className="w-36 mt-16" src={Logo} alt="logo" />
             <div className="mt-16">
                <input className="w-64 px-6 rounded-lg bg-gray-400 shadow-2xl text-white h-10 sm:w-screen max-w-2xl sm:h-12 "
                placeholder="Adicione uma nova tarefa"
                type="text"
                value={input}
                maxLength={18}
                onChange={(ev)=>setInput (ev.target.value)}
                />
                <button className=" ml-2 h-10 w-12 rounded-lg bg-sky text-white shadow-2xl sm:h-12 sm:w-16"
                 onClick={adicionarTasks}
                > Criar  </button>
            </div>
            <div className="flex justify-center mt-16  ">
                <h4 className="text-sky text-sm font-bold ">Tarefas criadas</h4>
                <button className="bg-gray-400 text-white mr-16 sm:mr-96 ml-3 w-6 rounded-full">{adicionarInputs.length}</button> 
            <div>
                <div className="flex">
                    <h4 className="text-purple text-sm font-bold " >Concluídas</h4> 
             <button className="bg-gray-400 text-white ml-3 w-6 rounded-full">0</button>        
         
                </div>       
              
           </div>
        </div>  
        <div>
                  <hr className="sm:w-screen sm:max-w-3xl w-80 border-gray-400 mt-2"/>      
          </div> 
        <div>  
            {
               adicionarInputs.map ((taskDoInput, i)=> <Tasks teste={taskDoInput} key={`${taskDoInput} ${i}`}/> )
            }
        </div>
        
            { adicionarInputs.length === 0 && (
        <Primary />
   )}
    </div>
    )
}