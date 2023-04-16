import Link from "next/link";
import React from "react";

const Header = () => {
  const categories = [
    { name: "Web Development", slug: "web-development" },
    { name: "Astronomy", slug: "astronomy" },
    { name: "Sports", slug: "sports" },
    { name: "Education", slug: "education" },
    { name: "Photography", slug: "photography" },
  ];
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
