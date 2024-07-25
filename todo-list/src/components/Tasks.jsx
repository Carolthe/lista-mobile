import Delete from "../img/Delete.png"

export default function Tasks (props, removerTask){
    return(
        <div className="flex items-center flex-col mt-10">
        <div className=" w-80 sm:w-screen sm:max-w-2xl rounded-lg h-12 bg-gray-400 flex items-center px-4 justify-between">
        <button type="checkbox"
        className="bg-gray-500 border-2 border-gray-300 w-4 h-4 rounded-full  "></button>
        <p className="text-white px-4 w-full ">{props.teste}</p>
       <button onClick={removerTask}> <img src={Delete} className=" w-6 rounded-full "/></button>
    </div>
</div>
    )
}