import React from "react";
import PostCard from "./PostCard";
import { getPosts } from "@/services";

const Posts = ({ posts }) => {
  console.log({posts});
  return (
    <div className="px-4">
      {posts &&
        posts.map((post) => {
          return <PostCard key={post.slug} post={post} />;
        })}
    </div>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}

export default Posts;
