
import Link from "next/link";
import React from "react";

const Categories = () => {
  const categories = [
    { name: "Web Development", slug: "web-development" },
    { name: "Astronomy", slug: "astronomy" },
    { name: "Sports", slug: "sports" },
    { name: "Education", slug: "education" },
    { name: "Photography", slug: "photography" },
  ]
  return (
    <div className="p-4 bg-slate-50 rounded-md">
      <h3 className="font-bold">Categories</h3>
      <div>
        <ul className="p-1">
          {categories.map((post, index) => {
            return (
              <li key={index} className="my-2 hover:bg-slate-100 hover:text-purple-500 rounded-md">
                <Link href={post.slug} className="items-center  ">
                  <h4>{post.name}</h4>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
