import PostCard from "@/components/PostCard";
import { getPosts } from "@/services";
import Head from "next/head";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Yay CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="px-4">
          {posts &&
            posts.map((post) => {
              return <PostCard key={post.node.id} post={post.node} />;
            })}
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
