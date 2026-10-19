import { useState } from "react"
import { Send, User, Mail, Phone, Earth, UserPlus } from "lucide-react"
import {useForm} from "react-hook-form"
import { Link } from "react-router"

export default function Form() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handelSave= (e)=>{
        e.preventDefault();
        // const {name, email} = e.target.value
        console.log({name, email});
        console.log(JSON.stringify({name, email}));
    }


    //Test Code
    // console.log(name, email);
    //----------

    return (
        <div className="max-w-md m-auto my-10 p-6 flex flex-col bg-white border border-gray-200 rounded-2xl shadow-lg">
            <form /*action="POST"*/ onSubmit={handelSave} className="flex flex-col gap-5">
                
                {/* User Name Field */}
                <div className="flex items-center gap-3 bg-gray-50 p-2 px-3 border border-gray-300 rounded-xl focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition">
                    <label htmlFor="user" className="text-gray-600 font-medium whitespace-nowrap">User Name:</label>
                    <input            
                        type="text" 
                        id="user" 
                        value={name}
                        placeholder="User Name..."
                        className="w-full text-base text-gray-900 bg-transparent outline-none"
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <User className="text-gray-400 shrink-0" />
                </div>

                {/* Email Field */}
                <div className="flex items-center gap-3 bg-gray-50 p-2 px-3 border border-gray-300 rounded-xl focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition">
                    <label htmlFor="email" className="text-gray-600 font-medium whitespace-nowrap">Email:</label>
                    <input            
                        type="text" 
                        id="email" 
                        value={email}
                        placeholder="example123@gmail.com"
                        className="w-full text-base text-gray-900 bg-transparent outline-none" 
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Mail className="text-gray-400 shrink-0" />
                </div>

                {/* Submit Button */}
                <button 
                    onClick={handelSave}
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-medium p-3 rounded-xl border-2 border-emerald-600 hover:bg-transparent hover:text-emerald-600 transition duration-200 w-full cursor-pointer"
                >
                    Submit <Send className="w-4 h-4" />
                </button>
                <h2 className="p-2 text-center font-bold text-gray-500 rounded-xl">or</h2>
                  {/* <button 
                    onClick={handelSave}
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-medium p-3 rounded-xl border-2 border-emerald-600 hover:bg-transparent hover:text-emerald-600 transition duration-200 w-full cursor-pointer"
                >
                    Create <UserPlus className="w-4 h-4" />
                </button> */}

                <Link
                    to={"/register"}
                     className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-medium p-3 rounded-xl border-2 border-emerald-600 hover:bg-transparent hover:text-emerald-600 transition duration-200 w-full cursor-pointer"
                > Create <UserPlus className="w-4 h-4" /></Link>

            </form>
        </div>
    )
}


//Register Form Model Using React Hool Form

export function Register(){

    const {handleSubmit, register, formState:  {errors} } = useForm({
        defaultValues: {name:"", email:"@gmail.com", phone:"+8801", origin:"Bangladesh"}
    })
    const  onRegister =(data)=>{
        console.log(JSON.stringify({data}));
    }

    return(
         <div className="max-w-md m-auto my-10 p-6 flex flex-col bg-white border border-gray-200 rounded-2xl shadow-lg">
            <form /*action="POST"*/ onSubmit={handleSubmit(onRegister)} className="flex flex-col gap-5">
                
                {/* User Name Field */}
                <div className="flex items-center gap-3 bg-gray-50 p-2 px-3 border border-gray-300 rounded-xl focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition">
                    <label htmlFor="name" className="text-gray-600 font-medium whitespace-nowrap">User Name:</label>
                    <input            
                        type="text" 
                        placeholder="User Name..."
                        className="w-full text-base text-gray-900 bg-transparent outline-none"
                        {...register("name")}
                    />
                    <User className="text-gray-400 shrink-0" />
                </div>

                {/* Email Field */}
                <div className="flex items-center gap-3 bg-gray-50 p-2 px-3 border border-gray-300 rounded-xl focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition">
                    <label htmlFor="email" className="text-gray-600 font-medium whitespace-nowrap">Email:</label>
                    <input            
                        type="text" 
                        placeholder="example123@gmail.com"
                        className="w-full text-base text-gray-900 bg-transparent outline-none" 
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Your Email formet is Worng!!"
                            }
                        })}
                    />
                    <Mail className="text-gray-400 shrink-0" />
                </div>

                {errors.email && (
                        <span className="text-red-500 text-xs mt-1 ml-2 font-medium">
                            {errors.email.message}
                        </span>
                    )}

                 {/* Phone Field */}
                <div className="flex items-center gap-3 bg-gray-50 p-2 px-3 border border-gray-300 rounded-xl focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition">
                    <label htmlFor="phone" className="text-gray-600 font-medium whitespace-nowrap">Phone:</label>
                    <input            
                        type="text" 
                        placeholder="01100000000"
                        className="w-full text-base text-gray-900 bg-transparent outline-none"
                        {...register("phone")} 
                    />
                    <Phone className="text-gray-400 shrink-0"/>
                </div>

                 {/* Origin Field */}
                <div className="flex items-center gap-3 bg-gray-50 p-2 px-3 border border-gray-300 rounded-xl focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition">
                    <label htmlFor="origin" className="text-gray-600 font-medium whitespace-nowrap">Origin:</label>
                    <input            
                        type="text" 
                        placeholder="Your Country..."
                        className="w-full text-base text-gray-900 bg-transparent outline-none" 
                        {...register("origin")}

                    />
                    <Earth className="text-gray-400 shrink-0"/>
                </div>

                {/* Submit Button */}
                <button 
                    // onClick={handelSave}
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-medium p-3 rounded-xl border-2 border-emerald-600 hover:bg-transparent hover:text-emerald-600 transition duration-200 w-full cursor-pointer"
                >
                    Submit <Send className="w-4 h-4" />
                </button>

            </form>
        </div>
    )
}