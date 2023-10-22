import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link, Route, Routes } from "react-router-dom";
import CryptoDetails from "./CryptoDetails";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptoList, searchTerm]);
  console.log(cryptos);

  // Check if cryptos is undefined and is not fetching data
  if (!cryptos && !isFetching) {
    return <p>No data available.</p>;
  }

  return (
    <>
      {!simplified && (
        <div className="container flex justify-center items-center pt-10 pb-5 bg-[#110630]  ">
          <div className="search-crypto w-[50vw] flex items-center rounded-md bg-white">
            <input
              type="search"
              placeholder="Search"
              className="w-full border-none bg-transparent px-4 py-1 text-gray-900 focus:outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="m-2 rounded bg-teal-900 px-4 py-2 text-white">
              Search
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-4 gap-2 px-10  pl-[10vw] pr-[10vw] pb-10 bg-[#110630] ">
        {cryptos?.map((crypto) => (
          <div className="w-100 h-100  " key={crypto.id}>
            <Link key={crypto.id} to={`/crypto/${crypto.uuid}`}>
              <div className="rounded-md overflow-hidden shadow-lg max-w-sm p-5 h-full flex justify-between hover:cursor-pointer bg-[#9ED2BE] ">
                <div>
                  <h2 className="text-4xl">{crypto.rank}</h2>
                  <h1 className="text-xl">{crypto.name}</h1>
                  <img className="w-10 h-10" src={crypto.iconUrl} alt="" />
                </div>
                <div className=" ">
                  <p>Price: {millify(crypto.price)}</p>
                  <p>Market Cap: {millify(crypto.marketCap)}</p>
                  <p>Daily Change: {millify(crypto.change)}%</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cryptocurrencies;
