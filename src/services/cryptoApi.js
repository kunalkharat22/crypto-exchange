import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'; 

const cryptoAPIHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
}

const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;

const createRequest = (url) => ({ url, headers: cryptoAPIHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoAPI',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`https://coinranking1.p.rapidapi.com//coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId,timePeriod}) => createRequest(`https://coinranking1.p.rapidapi.com//coin/${coinId}/history?timePeriod=${timePeriod}`)
        }),

    })
});

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
} = cryptoApi