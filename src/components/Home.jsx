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
      <div className="bg-gradient-to-b from-[#130749] to-[#0F051D]">
        <div className="h-screen">
          <div className="text-white text-center pt-[10vh] pb-[4vh] text-[80px] font-bold leading-[90px]">
            <h1>TRACK </h1>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4800F9] to-[#EC00EC]">
              <span className="text-teal-100">💲</span> CRYPTO CURRENCIES{" "}
              <span className="text-teal-100">💲</span>
            </h1>
          </div>
          <div className="grid grid-cols-3 pl-[10vw] pr-[10vw] ">
            <div className=" ">
              <div className="rounded-md overflow-hidden shadow-lg max-w-sm p-6 bg-teal-900">
                <h2 className="text-4xl text-white">Total Cryptos</h2>
                <h1 className="text-xl text-white">{globalStats.total}</h1>
              </div>
            </div>
            <div className="">
              <div className="rounded-md overflow-hidden shadow-lg max-w-sm p-6 bg-teal-900">
                <h2 className="text-4xl text-white">Total Exchanges</h2>
                <h1 className="text-xl text-white">
                  {millify(globalStats.totalExchanges)}
                </h1>
              </div>
            </div>
            <div className="">
              <div className="rounded-md overflow-hidden shadow-lg max-w-sm p-6 bg-teal-900">
                <h2 className="text-4xl text-white">Total Market Cap</h2>
                <h1 className="text-xl text-white">
                  {millify(globalStats.totalMarketCap)}
                </h1>
              </div>
            </div>
            <div className="pt-3">
              <div className="rounded-md overflow-hidden shadow-lg max-w-sm p-6 bg-teal-900">
                <h2 className="text-4xl text-white">Total 24h Volume</h2>
                <h1 className="text-xl text-white">
                  {millify(globalStats.total24hVolume)}
                </h1>
              </div>
            </div>

            <div className="pt-3 ">
              <div className="rounded-md overflow-hidden shadow-lg max-w-sm p-6 bg-teal-900">
                <h2 className="text-4xl text-white">Total Markets</h2>
                <h1 className="text-xl text-white">
                  {millify(globalStats.totalMarkets)}
                </h1>
              </div>
            </div>
            <div className="pt-3">
              <div className="rounded overflow-hidden shadow-lg max-w-sm p-6 bg-teal-900">
                <h2 className="text-4xl text-white">Total Coins</h2>
                <h1 className="text-xl text-white">
                  {millify(globalStats.totalCoins)}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="home-heading-container flex items-center justify-between pt-5 mx-20 rounded-md pb-10">
          <h1 className="text-4xl text-white text-[50px] pl-[15vw]">
            Top 10 Cryptocurrencies In The World
          </h1>
          <Link className="text-sky-500 mr-5" to="/cryptocurrencies">
            Show More
          </Link>
        </div>
        <Cryptocurrencies simplified />
        <div className="home-heading-container flex items-center justify-between pt-5 mx-20 rounded-md pb-10">
          <h1 className="text-4xl text-white text-[50px]  text center pl-[35vw]">
            Latest News
          </h1>
          <Link className="text-sky-500 mr-5" to="/news">
            Show More
          </Link>
        </div>
        <News simplified />
      </div>
    </>
  );
};

export default Home;
