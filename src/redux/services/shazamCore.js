import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreAPI = createApi({
  reducePath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "4dbd2f5b11mshe06dda52f895a2cp189982jsnc6bfdca8d061"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: (Listid = "genre-country-chart-DE-1") =>
        `/charts/track?locale=en-US&listId=${Listid}&pageSize=20&startFrom=0`,
    }),
    getSongDetails: builder.query({
      query: (songKey) =>
        `/shazam-songs/get-details?id=${songKey}&locale=en-US`,
    }),
    getSongDetailsV2: builder.query({
      query: (songId) => `/songs/v2/get-details?id=${songId}&l=en-US`,
    }),
    getChartLists: builder.query({
      query: () => `/charts/list`,
    }),
    getArtist: builder.query({
      query: (artId) => `/artists/get-details?id=${artId}&l=en-US`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongDetailsV2Query,
  useGetChartListsQuery,
  useGetArtistQuery,
} = shazamCoreAPI;
