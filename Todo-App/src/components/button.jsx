function Button({title, bgColor, eventClick}){
    return(
        <button 
        onClick={eventClick} 
        className={`p-4 m-2 border-2 rounded-md hover:bg-transparent text-white font-semibold ${bgColor}`}
        >{title}</button>
    )
}

export default Button;