import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentPosts = () => {
  const recentPosts = [
    { title: "React testing", date: "Today", image: "https://dummyimage.com/32x32/000&text=Featured+Image", slug: "react-testing" },
    {
      title: "Web Development",
      date: "Oct 11, 2022",
      image: "https://dummyimage.com/32x32/000&text=Featured+Image",
      slug: "web-development",
    },
  ];
  return (
    <div className="p-4 bg-slate-50 my-4 rounded-md">
      <h3 className="font-bold">Recent Posts</h3>
      <div>
        <ul className="p-1">
          {recentPosts.map((post, index) => {
            return (
              <li key={index} className="my-2">
                <Link href={post.slug} className="flex items-center hover:bg-slate-100 hover:text-purple-500 rounded-md">
                  <Image
                    className="rounded-full mx-2"
                    src={post.image}
                    alt={post.image}
                    width={32}
                    height={32}
                  />
                  <div>
                    <small>{post.date}</small>
                    <h4>{post.title}</h4>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecentPosts;
