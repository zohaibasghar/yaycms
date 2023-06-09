import { getCategories } from "@/services";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import Loading from "./Loading";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <div className="p-4 mb-8 bg-slate-50 rounded-md">
      <h3 className="font-bold">Categories</h3>
      <div>
        {categories && categories.length > 0 ? (
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
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Categories;
