import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query"
import { fetchListBlogs } from "./service"

const BLOG_KEY = 'BLOG_KEY'

export const useFetchListBlogs = (
    options?: UseQueryOptions<
    Blog[],
    Error,
    Blog[],
    QueryKey
    >,
) => {
    const queryOptions: UseQueryOptions<
        Blog[],
        Error,
        Blog[],
        QueryKey
    > = {
        queryKey: [BLOG_KEY],
        queryFn: async () => {
            const response = await fetchListBlogs()
            return response
        },
        ...options,
    }
    return useQuery<Blog[],Error>(queryOptions)
}
