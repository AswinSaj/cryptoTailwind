import React from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import moment from "moment/moment";

const dummy =
  "data:image/jpeg;base64,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";
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
                <div className="flex text-xl  py-11 px-5 h-[80%]">
                  <h1 className="px-4">{news.name}</h1>
                  <img
                    className="h-[11vh]"
                    src={news?.image?.thumbnail?.contentUrl || dummy}
                    alt=""
                  />
                </div>
                <div className="flex justify-center margin-auto">
                  <h1>{moment(news.datePublished).startOf("ss").fromNow()}</h1>
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
