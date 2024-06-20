import { gql } from "@apollo/client";
import client from "../client";
import { QUERY_BLOG } from "./query";

export const fetchListBlogs = async (): Promise<Blog[]> => {
    const result = await client.query({
      query: gql(QUERY_BLOG),
    });
    return result.data.locations;
}