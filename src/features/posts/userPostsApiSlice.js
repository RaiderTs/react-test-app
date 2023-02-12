import { apiSlice } from '../../app/api/apiSlice';

export const usersPostsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserPosts: builder.query({
      query: (id) => {
        return {
          url: `/posts?userId=${id}`,
        };
      },
      providesTags: ['Posts'],
    }),
    deleteUserPost: builder.mutation({
      query: (id) => {
        return {
          url: `/posts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const { useGetUserPostsQuery, useDeleteUserPostMutation } =
  usersPostsApiSlice;
