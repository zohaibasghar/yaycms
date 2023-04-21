// import PostCard from "@/components/PostCard";
const PostCard = React.lazy(() => import("@/components/PostCard"));
import Loading from "@/components/Loading";
import { getPosts } from "@/services";
import Head from "next/head";
import React, { Suspense } from "react";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Yay CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="px-4">
          <Suspense fallback={<Loading />}>
            {posts && posts.length > 0 ? (
              posts.map((post) => {
                return <PostCard key={post.node.id} post={post.node} />;
              })
            ) : (
              <div className="flex justify-center items-center h-52 bg-slate-50 my-4 rounded-md flex-col text-xl font-semibold">
                Posts
                <div className="border-t border-x my-4 mx-2 border-gray-700 w-8 h-8 rounded-full animate-spin">
                  {" "}
                </div>
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
