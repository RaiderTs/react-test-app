import { useParams, useNavigate } from 'react-router-dom';


import { apiSlice } from '../../app/api/apiSlice';

export const usersAlbumsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserAlbums: builder.query({
      query: (id) => {
        return {
          url: `/albums?userId=${id}`,
        };
      },
      providesTags: ['Albums'],
    }),
  }),
});

export const { useGetUserAlbumsQuery } = usersAlbumsApiSlice;
