import { getRecentPosts, getSimilerPosts } from "@/services";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RecentPosts = ({ categories, slug }) => {
  const [recentPosts, setRecentPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilerPosts(categories, slug).then((result) =>
        setRecentPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRecentPosts(result));
    }
  }, [categories, slug]);

  return (
    <div className="p-4 bg-slate-50 my-4 rounded-md">
      <h3 className="font-bold">Recent Posts</h3>
      <div>
        <ul className="p-1">
          {recentPosts.map((post, index) => {
            return (
              <li key={index} className="my-2">
                <Link
                  href={post.slug}
                  className="flex items-center hover:bg-slate-100 hover:text-purple-500 rounded-md items-center"
                >
                  <Image
                    className=" mx-2 rounded-full object-cover post-img"
                    src={post.featuredImage.url}
                    alt={post.featuredImage.url}
                    width={100}
                    height={100}
                  />

                  <div>
                    <small>
                      {moment(post.createdAt).format("MMM DD, YYYY")}
                    </small>
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
