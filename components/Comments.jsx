import { getComments } from "@/services";
import { useEffect, useState } from "react";
const Comments = ({slug}) => {
    const [comments, setComments] = useState([])
    useEffect(() => {
      getComments(slug).then(result=>setComments(result))
    }, [])
    console.log(comments)
    return (
        <div>
            Enter
        </div>
    );
}


export default Comments;