import Header from "@/components/Header";
import Loading from "@/components/Loading";
const RecentPosts = React.lazy(() => import("@/components/RecentPosts"));
const Categories = React.lazy(() => import("@/components/Categories"));
import "@/styles/globals.scss";
import { useRouter } from "next/router";
import React, { Suspense, useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(30);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    router.events.on("routeChangeError", () => {
      setProgress(10);
    });
  }, [router.events, router.query]);

  return (
    <>
      <LoadingBar
        color="#b5aee4"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 ">
            <Component {...pageProps} />
          </div>
          <div className="md:col-1 ">
            <Suspense fallback={<Loading />}>
              <RecentPosts />
            </Suspense>
            <Suspense>
              <Categories />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
