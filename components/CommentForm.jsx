import { useState } from "react";

const CommentForm = ({slug}) => {
  const [commentCred, setCommentCred] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const credChange = (e) => {
    setCommentCred({
      ...commentCred,
      [e.target.name]: e.target.value,
    });
  };
  const postComment = async (e) => {
    e.preventDefault()
    const req = await fetch('/api/comment  ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name:commentCred.name,email:commentCred.email,comment:commentCred.comment,slug}),
      });
    const res = await req.json()
    console.log(res)
  };
  return (
    <div className=" bg-slate-50 p-4 my-4 mx-1 rounded-md">
      <h2 className="text-2xl my-4 font-semibold">Comment Form</h2>
      <form method="POST" onSubmit={postComment}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border-black justify-between">
          <input
            type="text"
            placeholder="Name"
            className="outline-none bg-slate-200 p-2 rounded-md"
            onChange={credChange}
            name="name"
            id="name"
            value={commentCred.name}
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={credChange}
            name="email"
            id="email"
            className="outline-none bg-slate-200 p-2 rounded-md "
            value={commentCred.email}
          />
        </div>
        <div className="my-2">
          <textarea
            name="comment"
            id="comment"
            placeholder="Comment"
            value={commentCred.comment}
            className="w-full outline-none bg-slate-200 p-2 rounded-md"
            rows={5}
            onChange={credChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 hover:bg-pink-700 text-md font-medium rounded-full text-white px-4 py-1 cursor-pointer"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
