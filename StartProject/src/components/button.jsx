function Button({type, bgColor, onClick}){

    return(
            <button 
            onClick={onClick}
            className={`"text-white ${bgColor} box-border border border-blue-500 hover:bg-transparent   shadow-sm font-medium leading-5 rounded-full text-sm px-4 py-2.5 m-3 transition hover:duration-300"`}>{type}</button>
    )
}

export default Button;