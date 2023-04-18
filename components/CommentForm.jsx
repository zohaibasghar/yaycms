import { useState } from "react";

const CommentForm = ({ slug }) => {
  const [commentCred, setCommentCred] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [res, setRes] = useState(null);
  const [progress, setProgress] = useState(false);
  const credChange = (e) => {
    setCommentCred({
      ...commentCred,
      [e.target.name]: e.target.value,
    });
  };
  const postComment = async (e) => {
    e.preventDefault();
    setProgress(true);
    const req = await fetch("/api/comment  ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: commentCred.name,
        email: commentCred.email,
        comment: commentCred.comment,
        slug,
      }),
    });
    const res = await req.json();
    setProgress(false);
    if (res.createComment.id) {
      setCommentCred({ name: "", email: "", comment: "" });
      setRes("success");
    } else {
      setRes("error");
    }
    setTimeout(() => {
      setRes(null);
    }, 3000);
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
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={credChange}
            name="email"
            id="email"
            className="outline-none bg-slate-200 p-2 rounded-md "
            value={commentCred.email}
            required
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
            required
            onChange={credChange}
          ></textarea>
        </div>
        {res === "error" && (
          <div className="text-red-700 text-center mb-2 animate-pulse">
            There is an error posting your comment please try again later.
          </div>
        )}
        {res === "success" && (
          <div className="text-green-700 text-center mb-2 animate-pulse">
            Your comment has been posted! 👌
          </div>
        )}
        <button
          type="submit"
          disabled={progress}
          className="transition disabled:bg-pink-500 disabled:cursor-default disabled:translate-y-0 duration-500 ease transform  bg-pink-600 hover:bg-pink-700 text-md font-medium rounded-full text-white w-32 flex justify-center py-1 cursor-pointer"
        >
          {progress ? (
            <div className="border-t border-x my-1 mx-2 border-slate-50 w-4 h-4 rounded-full animate-spin">
              {" "}
            </div>
          ) : (
            "Post Comment"
          )}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
