import React from "react";
import BlogCard from "./ImageCard";

const CardList = () => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
<div className="flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
    {arr.map((item, index) => (
      <BlogCard key={index} i={item}/>
    ))}
  </div>
</div>
  );
};

export default CardList;
