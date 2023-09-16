import React from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  console.log(data);
  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading....";
  return (
    <>
      <div className="grid grid-cols-3 pl-20">
        <div className="py-10 ">
          <div className="rounded-md overflow-hidden shadow-lg max-w-sm p-6 bg-teal-900">
            <h2 className="text-4xl text-white">Total Cryptos</h2>
            <h1 className="text-xl text-white">{globalStats.total}</h1>
          </div>
        </div>
        <div className="py-10">
          <div className="rounded-md overflow-hidden shadow-lg max-w-sm p-6 bg-teal-900">
            <h2 className="text-4xl text-white">Total Exchanges</h2>
            <h1 className="text-xl text-white">
              {millify(globalStats.totalExchanges)}
            </h1>
          </div>
        </div>
        <div className="py-10">
          <div className="rounded-md overflow-hidden shadow-lg max-w-sm p-6 bg-teal-900">
            <h2 className="text-4xl text-white">Total Market Cap</h2>
            <h1 className="text-xl text-white">
              {millify(globalStats.totalMarketCap)}
            </h1>
          </div>
        </div>
        <div className="py-10">
          <div className="rounded-md overflow-hidden shadow-lg max-w-sm p-6 bg-teal-900">
            <h2 className="text-4xl text-white">Total 24h Volume</h2>
            <h1 className="text-xl text-white">
              {millify(globalStats.total24hVolume)}
            </h1>
          </div>
        </div>
        <div className="py-10 ">
          <div className="rounded-md overflow-hidden shadow-lg max-w-sm p-6 bg-teal-900">
            <h2 className="text-4xl text-white">Total Markets</h2>
            <h1 className="text-xl text-white">
              {millify(globalStats.totalMarkets)}
            </h1>
          </div>
        </div>
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm p-6 bg-teal-900">
            <h2 className="text-4xl text-white">Total Coins</h2>
            <h1 className="text-xl text-white">
              {millify(globalStats.totalCoins)}
            </h1>
          </div>
        </div>
      </div>
      <div className="home-heading-container flex items-center justify-between pt-5 mx-20 rounded-md pb-5">
        <h1 className="text-4xl">Top 10 Cryptocurrencies In The World</h1>
        <Link className="text-sky-500 mr-5" to="/cryptocurrencies">
          Show More
        </Link>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container flex items-center justify-between pt-5 mx-20 rounded-md">
        <h1 className="text-4xl">Latest News</h1>
        <Link className="text-sky-500 mr-5" to="/news">
          Show More
        </Link>
      </div>
      <News simplified />
    </>
  );
};

export default Home;
