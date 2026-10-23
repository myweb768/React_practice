import { useState, useEffect } from "react";
import axios from "axios";


export default function Posts(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function fetchPost(){
            try {
                const response = await axios.get('https://dummyjson.com/posts');
                setPosts(response.data.posts);
                setLoading(false)
                console.log(response)
            } catch (error) {
                setError("Posts data fetching failed")
                setLoading(false)
                console.log(error)
            }
        }

        fetchPost()
    }, []);

    if(loading) return <h2>Loading...</h2>
    if(error) return {error}

    return(
        <div>
            <h2 className="text-center ">All Posts</h2>
            <div className="grid grid-cols-2 boder-2 rounded-xl bg-gray-600 p-3 m-auto w-[90%]">
                {posts.map((post)=>(
                    <div key={post.id} className=" w-auto p-4 m-4 border-2 rounded-xl bg-black ">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <div>
                            <strong>Tags:</strong>
                            {post.tags.map((tag, index)=>(
                                <span key={index}>#{tag}</span>
                            ))}
                        </div>
                        <div>
                            <span>Like:{post.reactions.likes}</span>
                            <span>Dislike:{post.reactions.dislikes}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}