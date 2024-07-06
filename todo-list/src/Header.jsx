import Logo from "./img/Logo.png"

export default function Header (){
    return(
        <div className="flex flex-col justify-center items-center bg-gray-700 h-48 w-full ">
             <img className="w-28 mt-44" src={Logo} alt="logo" />
             <div className="mt-16 flex justify-center ">
                <input className="w-64 h-10 px-6 rounded-lg bg-gray-400 shadow-2xl text-white sm:w-screen max-w-2xl sm:h-12 "
                placeholder="Adicione uma nova tarefa"/>
                <button className=" ml-2 h-10 w-12 rounded-lg bg-sky text-white shadow-2xl sm:h-12 sm:w-16"> Criar  </button>
            </div>
            <div className="flex justify-center mt-16  ">
                <h4 className="text-sky text-sm font-bold ">Tarefas criadas</h4>
                <button className="bg-gray-400 text-white mr-16 sm:mr-96 ml-3 w-6 rounded-full">0</button> 
            <div>
                <div className="flex">
                    <h4 className="text-purple text-sm font-bold " >Concluídas</h4> 
             <button className="bg-gray-400 text-white ml-3 w-6 rounded-full">0</button>                   
                </div>
            </div>
        </div>
    </div>
    )
}