import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreAPI = createApi({
  reducePath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "17b4c072c2msh8525d82bf2e03afp1f3f03jsndd4096585dd2"
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
    getV2ToV1: builder.query({
      query: (songId) => `/shazam-songs/get-details?id=${songId}&locale=en-US`,
    }),

    getChartLists: builder.query({
      query: () => `/charts/list`,
    }),
    getArtist: builder.query({
      query: (artId) => `/artists/get-details?id=${artId}&l=en-US`,
    }),
    getSongRelated: builder.query({
      query: (artId) => `/artists/get-top-songs?id=${artId}&l=en-US`,
    }),
    getSongRecommended: builder.query({
      query: (songId) =>
        `/songs/list-recommendations?key=${songId}&locale=en-US`,
    }),
    //getSongsByCountry: builder.query({query:(countryCode)=>``})
    getSongBySearch: builder.query({
      query: (searchTerm) =>
        `/search?term=${searchTerm.replace(
          " ",
          "%"
        )}&locale=en-US&offset=0&limit=5`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongDetailsV2Query,
  useGetV2ToV1Query,
  useGetChartListsQuery,
  useGetArtistQuery,
  useGetSongRelatedQuery,
  useGetSongRecommendedQuery,
  useGetSongBySearchQuery,
} = shazamCoreAPI;
