// import { Routes, Route } from "react-router";
// import App from "./App.jsx"
// import Home from "./home.jsx";
// import AdminDashboard from "./admin/dashboard.jsx"
// import Settings from "./admin/setting.jsx";
// import Report from "./admin/report.jsx";
// export default function AppRouter(){
//     return(
//             <Routes>
//                 <Route path="/">
//                     <Route path="app" Component={App} />
//                     <Route path="home" Component={Home} />
//                 </Route>
//                 <Route path="admin" Component={AdminDashboard}>
//                     <Route path="setting" Component={Settings} />
//                     <Route path="report" Component={Report} />
//                 </Route>
                
//             </Routes>
//     )
// };



import { Routes, Route } from "react-router";
import  Navigator,{Welcome} from "./welcome.jsx";

//Public Section
import App from "./App.jsx";
import Home from "./home.jsx";
import Form, {Register} from "./components/form.jsx"


//Admin Section
import AdminDashboard, { DashboardHome } from "./admin/dashboard.jsx";
import Settings from "./admin/setting.jsx";
import Report from "./admin/report.jsx";

export default function AppRouter() {
  return (
    <Routes>
    <Route path="/" element={<Navigator/>}>
        <Route index element={<Welcome/>}/>
       <Route path="app" element={<App />} />
       <Route path="home" element={<Home />} />
       <Route path = "form" element={<Form/>}/>
       <Route path = "register" element={<Register/>}/>
    </Route>

     <Route path="/admin" element={<AdminDashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="setting" element={<Settings />} />
        <Route path="report" element={<Report />} />
      </Route>
    </Routes>
  );
}