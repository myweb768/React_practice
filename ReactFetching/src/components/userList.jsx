import { useState, useEffect } from "react";
import axios from "axios"

export default function UserList(){
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=>{
       async function fetchUser(){
         try {
            const response = await axios.get('https://dummyjson.com/users')
             setUser(response.data.users);
            setLoading(false)
        } catch (error) {
            setError('Excouse to user Data fetch!!')
            setLoading(false)
        }
        };

        fetchUser()
    },[]);

    if(loading){
        return(
            <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
        )
    };

    if (error) {
    return <div className="text-center text-error mt-10">{error}</div>;
  }
       

    return(
        <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        ডামি ব্যাকএন্ড থেকে ফেচ করা ইউজারের তালিকা
      </h2>

      {/* রেসপন্সিভ গ্রিড লেআউট */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="card bg-base-100 shadow-xl border border-gray-100">
            <figure className="px-4 pt-4">
              <img 
                src={user.image} 
                alt={user.firstName} 
                className="rounded-xl w-24 h-24 object-cover" 
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title text-lg font-bold">
                {user.firstName} {user.lastName}
              </h3>
              <p className="text-sm text-gray-500">ইমেল: {user.email}</p>
              <p className="text-sm text-gray-500">বয়স: {user.age} বছর</p>
              <p className="text-sm font-medium text-primary">
                কোম্পানি: {user.company?.title || 'প্রযোজ্য নয়'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}