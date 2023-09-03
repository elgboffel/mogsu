import { AppError } from "../errors/app-error/app-error";
import { FetcherArgs } from "./types";

export async function fetcher<TResponse>({
  url,
  config,
  errorHandlers = {},
}: FetcherArgs): Promise<TResponse | AppError> {
  try {
    const response = await fetch(url, config);

    const json = await response.json();

    if (response.status !== 200) {
      if (errorHandlers.response) return Promise.reject(errorHandlers.response(response));
      return Promise.reject(new AppError(json));
    }

    return json;
  } catch (error: unknown) {
    if (errorHandlers.catch) return Promise.reject(errorHandlers.catch(error));

    return Promise.reject(new AppError(error));
  }
}
