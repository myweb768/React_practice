function Input({text, setText}){
    return(
        <input 
        type="text"  
        className="p-3 m-3 border-2 rounded-xl w-[80%]" 
        placeholder="Write Here..."
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
    )
}

export default Input;