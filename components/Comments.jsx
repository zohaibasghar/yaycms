import { getComments } from "@/services";
import { useEffect, useState } from "react";
const Comments = ({slug}) => {
    const [comments, setComments] = useState([])
    useEffect(() => {
      getComments(slug).then(result=>setComments(result))
    }, [slug])
    console.log({comments})
    return (
        <div>
            
        </div>
    );
}


export default Comments;