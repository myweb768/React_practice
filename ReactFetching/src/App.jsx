// import React from "react";
import Input from "./components/input";
import Card from "./components/card";
import Button from "./components/button";
import UserList from "./components/userList";

function App(){

  function hiClick(){
    alert("HI!!")
  }
  return(
    <>

    <h1 className="m-2">React Data Fetching</h1>
    <div className="min-h-screen bg-base-200 py-10 m-2">
      <h2 >All Users List</h2>
    <UserList/>
    </div>
    

  <Card title={'My Card'} para={"This is DaisyUI Use use Card"} btnTitle={"More..."} />

  <div>
  <Input type="file" onChange=""/>
  <Button title={"Submit"} bgColor={"bg-blue-500"} eventClick={hiClick}/>
  </div>
    </>
  )
}

export default App;