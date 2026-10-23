import {Routes, Route } from "react-router"

import Posts from "./src/components/posts"
import App from "./src/App"

export default function AppRouter(){
    return(
        <Routes>
          <Route path="posts" element={<Posts/>}/>
          <Route path="/" element={<App/>}/>
        </Routes>
    )
}