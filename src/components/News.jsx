import React from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 6 : 12,
  });
  console.log(cryptoNews);
  if (!cryptoNews?.value) return "Loading...";

  return (
    <>
      <h1 className="text-4xl text-center py-5">Top News</h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-2">
          {cryptoNews.value.map((news, i) => (
            <div
              className=" w-[31vw] h-[30vh] rounded-md overflow-hidden shadow-lg flex justify-between hover:cursor-pointer bg-[#9ED2BE] "
              key={i}
            >
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="flex text-xl  py-11 px-5">
                  <h1 className="px-4">{news.name}</h1>
                  <img src={news?.image?.thumbnail?.contentUrl} alt="" />
                </div>
                {/* <p className="">
                  {news.description > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p> */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
