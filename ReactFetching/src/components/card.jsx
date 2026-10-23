export default function Card({title,para,btnTitle}){
    return(
    <div className="card card-border bg-base-100 w-96">
    <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{para}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{btnTitle}</button>
    </div>
  </div>
</div>
    )
}