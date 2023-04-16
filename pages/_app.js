import Categories from "@/components/Categories";
import Header from "@/components/Header";
import RecentPosts from "@/components/RecentPosts";
import "@/styles/globals.scss";
import "tailwindcss/tailwind.css";
export default function App({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 ">
          <Component {...pageProps} />
        </div>
        <div className="md:col-1 ">
          <RecentPosts />
          <Categories />
        </div>
      </div>
    </div>
  );
}
