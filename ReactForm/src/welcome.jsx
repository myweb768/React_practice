import { Sparkles, } from "lucide-react";
import { Outlet } from "react-router";
import Navbar from "./navbar";


export default function Navigator(){
    return(
        <>
           <Navbar/>
           <Outlet/>
        </>
    )

    
}

export function Welcome() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-4 max-w-md">
        
        {/* আইকন */}
        <div className="inline-flex p-3 bg-blue-600/20 text-blue-400 rounded-full mb-2">
          <Sparkles className="w-8 h-8" />
        </div>

        {/* শিরোনাম */}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Welcome to Our App!
        </h1>

        {/* বর্ণনা */}
        <p className="text-slate-400 text-sm sm:text-base">
          আপনার প্রজেক্ট সফলভাবে রান করছে। এখন আপনার ইচ্ছেমতো ফিচার ও পেজ যুক্ত করা শুরু করুন।
        </p>

        {/* বাটন */}
<p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          Industrial and commercial waste কে মূল্যবান সম্পদে রূপান্তর করুন। আমরা পেশাদারভাবে <span className="text-emerald-400 font-semibold">Plastic, Polymer, Paper, এবং PVC</span> রিসাইক্লিংয়ের মাধ্যমে একটি সবুজ ও পরিচ্ছন্ন পৃথিবী গড়তে কাজ করছি।
        </p>

      </div>
    </div>

  );
}