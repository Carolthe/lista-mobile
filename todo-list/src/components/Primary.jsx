import Notas from "../img/Notas.png"

export default function Primary (){
    return(
    <div>
        <div className="flex justify-center mt-2">
           
        </div>
        <div className="flex justify-center mt-24">    
            <img className="sm:w-14 sm:h-14 w-10 h-10" src={Notas} alt="Notas"></img>
        </div>
        <div className="flex flex-col items-center w-full  mt-4">
            <p className="text-gray-300 inline-block sm:text-base text-sm font-bold">Você ainda não tem tarefas cadastradas</p>
            <p className="text-gray-300  inline-block sm:text-base text-sm ml-2">Crie tarefas e organize seus itens a fazer</p>
        </div>     
    </div>
    )
}