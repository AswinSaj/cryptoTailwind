import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import parse from "html-react-parser";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import millify from "millify";
import {
  AiFillDollarCircle,
  AiOutlineInfoCircle,
  AiOutlineStock,
  AiOutlineTrophy,
} from "react-icons/ai";
import {
  BsCurrencyDollar,
  BsCurrencyExchange,
  BsHash,
  BsLightningCharge,
  BsRecycle,
} from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import LineChart from "./LineChart";
const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails = data?.data?.coin;

  console.log(cryptoDetails);
  console.log(coinHistory);
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <AiFillDollarCircle />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <BsHash /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <BsLightningCharge />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <BsCurrencyDollar />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <AiOutlineTrophy />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <AiOutlineStock />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <BsCurrencyExchange />,
    },
    {
      title: "Approved Supply",
      icon: <TiTickOutline />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <AiOutlineInfoCircle />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <BsRecycle />,
    },
  ];
  if (!cryptoDetails) {
    return <p>No data available.</p>;
  }

  return (
    <>
      <div className="wrapper bg-[#120747] text-white">
        <div className="heading text-center pb-5">
          <h1 className="text-3xl font-bold">{cryptoDetails.name} Price</h1>
          <p classname="text-4xl">
            {cryptoDetails.name} live prices in US dollars.View value stats ,
            market cap and supplpy
          </p>
        </div>
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ></label>
        {/* <select
          id="countries"
          onChange={(event) => setTimePeriod(event.target.value)}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[10vw] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Time</option>
          {time.map((date) => (
            <option key={date}>{date}</option>
          ))}
        </select> */}
        <div className="text-center text-2xl">
          <h1 className="text-bold">What is {cryptoDetails.name}?</h1>
          <h1 className="text-center w-[30vw] mx-auto">
            {parse(cryptoDetails.description)};
          </h1>
        </div>

        <div className="flex justify-around pt-10 ">
          <div>
            <div className="text-center ">
              <h1 className="text-2xl font-semibold">
                {cryptoDetails.name} Value Statistics
              </h1>
              <h1>An overview showing the stats of {cryptoDetails.name} </h1>
            </div>
            {stats.map(({ title, value, icon }, index) => (
              <tr key={index} className="text-black">
                <td className="border border-gray-300 px-4 py-2 flex justify-between items-center bg-[#9ED2BE] rounded-lg ">
                  <div className="">{title}</div>
                  <div className="pl-5">{icon}</div>
                </td>
                <td className="border border-gray-300 px-4 py-2 font-bold bg-[#9ED2BE] rounded-lg">
                  {value}
                </td>
              </tr>
            ))}
          </div>

          <div className="text-black">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-white">
                Other Statistics
              </h1>
              <h1 className="text-white">
                Overview showing the stats of all cryptocurrencies
              </h1>
            </div>
            <div className="pl-4">
              {genericStats.map(({ icon, title, value }, index) => (
                <tr key={index} className="">
                  <td className="border  border-gray-300 px-4 py-2 flex  justify-between items-center bg-[#9ED2BE] rounded-lg ">
                    <div className="">{title}</div>
                    <div className="pl-10">{icon}</div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 font-bold bg-[#9ED2BE] rounded-lg">
                    {value}
                  </td>
                </tr>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center">
          <h1>{cryptoDetails.name} Links</h1>
          <table>
            <tbody>
              {cryptoDetails.links.map((link, index) => (
                <tr key={index} className="">
                  <td className="border border-gray-300 px-4 py-2 flex justify-between items-center bg-[#9ED2BE] rounded-lg">
                    <div className="">{link.type}</div>
                    <a href={link.url} target="_blank">
                      {link.name}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </>
  );
};

export default CryptoDetails;
