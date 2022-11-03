import { API_KEY } from "./settings";

const fromApiResponseToSingleGif = (apiResponse) => {
  const { data } = apiResponse;
  const { images, title, id } = data;
  const { url } = images.downsized_medium;

  return { title, id, url };
};

export default function getSingleGif({ id }) {
  const apiUrl = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then(fromApiResponseToSingleGif);
}
