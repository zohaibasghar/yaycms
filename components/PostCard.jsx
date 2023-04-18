import moment from "moment/moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="my-4 bg-slate-50 rounded-md p- object-contain">
      <Image
        className="mx-auto mt-1 rounded-md object-cover w-full"
        alt={post.title}
        src={post.featuredImage.url}
        width={600}
        height={400}
      />
      <div className=" flex justify-center my-3 gap-6">
        <div className="flex items-center gap-2">
          <Image
            alt={post.author.name}
            src={post.author.photo.url}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span>{post.author.name}</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{moment(post.createdAt).format("DD/MM/YYYY")}</span>
        </div>
        <div className="flex items-center">
          {post.categories.map((cat) => {
            return (
              <Link
                key={cat.slug}
                title={`Category: ${cat.name}`}
                href={`/category/${cat.slug}`}
                className="bg-pink-300 px-2 py-1 font-extralight text-xs rounded-full"
              >
                {cat.name}
              </Link>
            );
          })}
        </div>
      </div>
      <h3 className="font-bold text-3xl my-2 text-center">{post.title}</h3>
      <p className="text-center my-4 md:px-15 px-10">{post.excerpt}</p>
      <div className="text-center pb-4">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 hover:bg-pink-700 text-lg font-medium rounded-full text-white px-6 py-2 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
