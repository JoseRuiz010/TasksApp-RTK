import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `/tasks`,
      providesTags: ["Tasks"],
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
    }),
    createTask: builder.mutation({
      query: (newTasks) => ({
        url: "/tasks",
        method: "POST",
        body: newTasks,
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateTasks: builder.mutation({
      query: (updateTasks) => ({
        url: `/tasks/${updateTasks.id}`,
        method: "PUT",
        body: updateTasks,
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTasks: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});
export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useDeleteTasksMutation,
  useUpdateTasksMutation,
} = apiSlice;
