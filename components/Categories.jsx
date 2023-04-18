import { getCategories } from "@/services";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <div className="p-4 bg-slate-50 rounded-md">
      <h3 className="font-bold">Categories</h3>
      <div>
        {categories ? (
          <ul className="p-1">
            {categories.map((post, index) => {
              return (
                <li
                  key={index}
                  className="my-2 hover:bg-slate-100 hover:text-purple-500 rounded-md"
                >
                  <Link href={post.slug} className="items-center  ">
                    <h4>{post.name}</h4>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="flex justify-center items-center h-52">
            <div className="border-t border-x my-1 mx-2 border-gray-700 w-8 h-8 rounded-full animate-spin">
              {" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
