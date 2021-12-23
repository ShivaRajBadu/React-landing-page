import React from "react";
import { useState, useEffect } from "react";
import ArticleItem from "./articleItem";

const Article = () => {
  let [Adata, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=Apple&from=2021-12-20&sortBy=popularity&apiKey=8c3463f9c851462584398279821de5aa"
    )
      .then((response) => response.json())
      .then((data) => setData(data.articles))
      .catch((error) => console.log(error));
  });
  function handleExpand() {
    console.log("badu");
  }
  return (
    <div className="px-12 w-5/6 m-auto py-9 bg-green-700 mt-12 text-center rounded-2xl ">
      <div className="flex  items-center pb-5 shadow-inner">
        <h1 className="text-7xl mr-16">Latest article</h1>
        <p className="w-80 text-md ml-16 leading-8 mt-9">
          since we started the first commercial juicing blog in 2021, we have
          been writing articles on every aspect of juicing from creating
          recipes.
        </p>
      </div>
      <div className="grid grid-cols-3  gap-9 text-center mt-4">
        {Adata.map((dt) => (
          <ArticleItem
            key={dt.totalResults}
            date={dt.publishedAt}
            title={dt.title}
            url={dt.urlToImage}
          />
        ))}
      </div>
      <button
        onClick={handleExpand}
        className=" mt-9 border-black border-2 py-2 px-9 rounded-2xl bg-black text-white hover:text-gray-400"
      >
        View All
      </button>
    </div>
  );
};

export default Article;
