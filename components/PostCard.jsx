import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
  
  return (
    <div className="my-4 bg-slate-50 rounded-md p-3">
      <Image
        className="mx-auto mt-3 rounded-lg"
        alt={post.title}
        src={post.image}
        width={500}
        height={300}
      />
      <h3 className="font-bold text-3xl underline my-2">{post.title}</h3>
      <p className="text-center my-2">{post.excerpt}</p>
      <div className="container flex justify-center">
        <Link
          className="link text-white py-2 px-3 rounded-3xl hover:bg-gray-700 "
          href={`/${post.slug}`}
        >
          Read Article
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
