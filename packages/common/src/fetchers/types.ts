import { AppError } from "../errors/app-error/app-error";

export type BaseFetcher = {
  url: string;
  config?: RequestInit | null;
  preview?: boolean;
};

export type ErrorHandlers = {
  response?: (response: Response) => AppError;
  catch?: (error: unknown) => Promise<AppError>;
};

export type FetcherArgs = {
  url: string;
  config?: RequestInit;
  errorHandlers?: ErrorHandlers;
};

export type GraphQLResponse<T = unknown> = {
  data: T;
  errors?: GraphQLError[];
  extensions?: unknown;
};

export interface GraphQLError {
  message: string;
  locations?: { line: number; column: number }[];
  path?: string[];
  extensions?: unknown;
}

export type GraphQLFetcher = BaseFetcher & {
  query: string;
  variables?: { [key: string]: unknown };
};

export type APIFetcher = BaseFetcher & {
  apiToken?: string;
};
