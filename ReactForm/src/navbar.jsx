import { NavLink } from "react-router";
import { Home, Layout, ShieldCheck, Recycle, Form } from "lucide-react";

function Navbar(){
    return(
        <nav className="bg-transparant border-b shadow-sm px-6 py-4 flex items-center justify-between w-full">
            
            {/* লোগো বা ব্র্যান্ড নেম */}
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xl tracking-wide">
                <Recycle className="w-6 h-6 animate-spin-slow" />
                <span>RK Recycle</span>
            </div>

            {/* নেভিগেশন লিংকসমূহ */}
            <div className="flex items-center gap-6 font-medium text-gray-600">
                
               <NavLink 
                to="/home" 
                 className={({ isActive }) => 
                  `flex items-center gap-1.5 hover:text-blue-600 transition px-3 py-1.5 rounded-lg hover:bg-blue-50 ${
                  isActive ? "bg-green-500 text-white" : "bg-transparent"
    }`
  }
>
  <Home className="w-4 h-4" /> Home
</NavLink>

                <NavLink 
                    to="/app" 
                    className={({isActive})=>
                        `flex items-center gap-1.5 hover:text-blue-600 transition px-3 py-1.5 rounded-lg hover:bg-blue-50 ${
                  isActive ? "bg-green-500 text-white" : "bg-transparent"
    }`
                    }
                >
                    <Layout className="w-4 h-4" /> App
                </NavLink>

                <NavLink 
                    to="/form" 
                     className={({isActive})=>
                        `flex items-center gap-1.5 hover:text-blue-600 transition px-3 py-1.5 rounded-lg hover:bg-blue-50 ${
                  isActive ? "bg-green-500 text-white" : "bg-transparent"
    }`
                    }
                >
                    <Form className="w-4 h-4"/>Form
                </NavLink>

                <NavLink 
                    to="/admin" 
                     className={({isActive})=>
                        `flex items-center gap-1.5 hover:text-blue-600 transition px-3 py-1.5 rounded-lg hover:bg-blue-50 ${
                  isActive ? "bg-green-500 text-white" : "bg-transparent"
    }`
                    }
                >
                    <ShieldCheck className="w-4 h-4" /> Admin
                </NavLink>

            </div>

        </nav>
    );
}

export default Navbar;