import { request } from "graphql-request";
const URL = "http://localhost:8000/graphql";

export const fetcher = (query, variables = {}) => request(URL, query, variables);
