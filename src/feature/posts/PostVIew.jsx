import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./postSlice";


const PostVIew = () => {

    const {isLoading,posts,error} = useSelector(state=> (state.posts))
    const disPatch = useDispatch();  
 
useEffect(()=>{
   disPatch(fetchPosts())
   console.log(posts)
},[])

  return (
    <div>
     {isLoading && <h3>Loading .....</h3>}
     {Error && <h3>{error}</h3>}
     {posts && posts.map((post,index)=>{
        return <div className="px-3 py-3" key={index}>
           
            <h5 className="text-3xl font-semibold">{post.title}</h5>
            <h5>{post.body}</h5>
        </div>
     })}
    
    </div>
  )
}

export default PostVIew