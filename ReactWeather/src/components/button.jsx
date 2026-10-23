export default function Button({eventClick, title}){
return(
    <button
    onClick={eventClick}
    className="btn btn-soft btn-accent hover:transperent"
    >{title}</button>
)
}