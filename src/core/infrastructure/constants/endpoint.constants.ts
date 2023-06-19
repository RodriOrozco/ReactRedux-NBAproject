import { BaseUrl, Endpoint } from "../../interfaces/endpoint.interfaces";

/* eslint-disable @typescript-eslint/no-inferrable-types */
export const BASE_URL: BaseUrl = "https://api-nba-v1.p.rapidapi.com/";

export const ENDPOINTS: Endpoint = {
  SEASONS: "/seasons",
  LEAGUES: "/leagues",
  GAMES: "/games",
  TEAMS: "/teams",
  PLAYERS: "/players",
  STANDINGS: "/standings",
  STATISTICS: "/statistics",
  SEARCH: "/search",
};
