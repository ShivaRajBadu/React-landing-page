import React from "react";

const ArticleItem = ({ url, title, date }) => {
  const split = title.search(":") === -1 ? title : title.split(":")[1];
  title = split;
  return (
    <div className="">
      <img className="rounded-full py-3 block w-200 h-220" src={url} alt="" />
      <h3 className="capitalize text-sm font-medium">{title}</h3>
      <p className="text-sm font-light"> {date}</p>
    </div>
  );
};

export default ArticleItem;
