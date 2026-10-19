
import SkillList from "./components/skills"
import Button from "./components/button";
import Counter from "./components/counter";
const frontendSkills = ["HTML & CSS", "JavaScript (ES6)", "React.js", "Tailwind CSS"];
  const backendSkills = ["Node.js", "Express.js", "MongoDB", "Redis"];

function App(){
  const name = "Omar";
  const age = 23;
  // const skills = ["MongoDB", "Expres", "Node", "Github", "Docker", "Redis", "ES6", "NPM", "Tailwind"];
  return (
    <div>
      <h1 className="bg-amber-500 h-auto">Welcome TO React</h1>
      <p>My Frist React Code</p>
      <span>My name is {name}. I am {age} Years Old</span>
      {/* <h3>My Skills:</h3> */}
     <SkillList category = "Frontend Development" skills =  {frontendSkills}/>
     <div className="my-6"></div>
     <SkillList category = "Backend Development" skills =  {backendSkills}/>

    <div>
      <Counter initialCount = {5}/>
    </div>

    <Button type={"About Me"} bgColor={"bg-amber-600"}/>
     
    </div>
  )
}

export default App;