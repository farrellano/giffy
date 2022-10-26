import { API_KEY } from "./settings";

const fromApiResponseToTrendingTerm = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export default function getTrendingTerms() {
  const apiUrl = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then(fromApiResponseToTrendingTerm);
}
