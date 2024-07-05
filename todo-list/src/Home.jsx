import Logo from "./img/Logo.png"

export default function Home (){
    return(
        <div className="flex flex-col justify-center items-center bg-gray-700 h-48 ">
             <img className="w-28 mt-20" src={Logo} alt="logo" />
             <div className="mt-16 flex justify-center ">
                <input className="w-72 h-10 px-6 rounded-lg bg-gray-400 shadow-2xl text-white sm:w-screen max-w-2xl sm:h-12 "
                placeholder="Adicione uma nova tarefa"/>
                <button className=" ml-5 h-10 w-12 rounded-lg bg-blue text-white shadow-2xl sm:h-12 sm:w-16"> Criar </button>
            </div>
        </div>
    )
}