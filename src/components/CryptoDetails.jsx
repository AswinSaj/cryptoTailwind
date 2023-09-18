import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import millify from "millify";
const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;

  console.log(data);
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
    },
    { title: "Rank", value: cryptoDetails?.rank },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
    },
  ];

  const genericStats = [
    { title: "Number Of Markets", value: cryptoDetails?.numberOfMarkets },
    { title: "Number Of Exchanges", value: cryptoDetails?.numberOfExchanges },
    {
      title: "Aprroved Supply",
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
    },
  ];
  return (
    <>
      <h1>Hello {coinId}</h1>
    </>
  );
};

export default CryptoDetails;
