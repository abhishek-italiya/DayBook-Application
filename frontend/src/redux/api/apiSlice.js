import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_BACKEND_URL
  ? `${import.meta.env.VITE_BACKEND_URL}/api`
  : "/api";

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    credentials: "include",
  }),
  tagTypes: ["User", "Entries"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
