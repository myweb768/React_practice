export default function Button({title, bgColor,eventClick}){
    return(
        <button onClick={eventClick} className={`${bgColor} p-3 m-2 border-2 rounded-xl hover:bg-transparent text-white`}>{title}</button>
    )
}