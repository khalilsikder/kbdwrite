
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({baseUrl:'https://kbdwrite-server.vercel.app/api' }),
  tagTypes: ['products'],
  endpoints: (builder) => ({

    getProducts:builder.query({
      query:()=>({
        method:'GET',
        url:'/products',
      }),
      providesTags:['products'],
    }),
    createOrder:builder.mutation({
      query: (data)=> {
        return {
          method: 'POST',
          url: `/order/create`,
          body: data,
        };
      }
    })
  })

})

export const { useGetProductsQuery,useCreateOrderMutation } = baseApi



