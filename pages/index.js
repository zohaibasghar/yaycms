import Posts from "@/components/Posts";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yay CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Posts />
      </div>
    </div>
  );
}
