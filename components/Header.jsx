import { getCategories } from "@/services";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);
  return (
    <div className="container mx-auto flex text-white justify-around items-center gap-3 w-full my-2">
      <Link className=" text-2xl font-semibold " href={`/`}>
        Yay CMS
      </Link>
      <div className="md:flex justify-evenly gap-6 hidden text-shadow">
        {categories.map((cat) => {
          return (
            <Link href={`/${cat.slug}`} key={cat.slug}>
              {cat.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
