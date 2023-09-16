import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-key": "a27e0c61fbmsh90b21295c0e6a59p17ead0jsn058dcdd8cf26",
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }), // Use the correct baseUrl here
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`), // Use the correct URL path
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
