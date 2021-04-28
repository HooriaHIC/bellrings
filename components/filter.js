import React from "react";
import Link from "next/link";

const Filter = ({ categories }) => {
  return (
    <div>
        {categories.map((category) => {
          return (
            <span key={category.id}>
              <Link as={`/category/${category.slug}`} href="/category/[id]">
                {category.name}
              </Link>
            </span>
              );
            })}
    </div>
  );
};

export default Filter;