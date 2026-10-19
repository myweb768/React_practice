function SkillList(props){
    //  const skills = ["MongoDB", "Express", "Node", "Github", "Docker", "Redis", "ES6", "NPM", "Tailwind"];
    return (
        <div>
            <h2>My Skill List</h2>
            <h2 className="text-xl font-semibold text-green-400 mb-4">{props.category}</h2>

            <ul className="md:grid md:grid-cols-3">
                {props.skills.map((skill, index)=>{
                 return <li className=" cursor-pointer p-3 m-3 bg-gray-500 rounded border-2 hover:bg-transparent hover:text-green-400 ease-linear" key={index}>{skill}</li>
                })}
            </ul>
        </div>
    )
}

export default SkillList;