import { GraphQLFetcher, GraphQLResponse } from "./types";
import { stripIgnoredCharacters } from "graphql/utilities";
import { fetcher } from "./fetcher";
import { AppError } from "../errors/app-error/app-error";

export async function graphqlFetcher<TResponse>({
  url,
  query,
  variables,
  config,
}: GraphQLFetcher): Promise<GraphQLResponse<TResponse> | AppError> {
  return await fetcher<GraphQLResponse<TResponse>>({
    url,
    config: {
      method: "POST",
      body: JSON.stringify({
        query: stripIgnoredCharacters(query),
        variables,
      }),
      ...config,
      headers: {
        ...(config?.headers ? { ...config.headers } : {}),
      },
    },
  });
}
