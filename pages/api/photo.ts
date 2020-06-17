import fetch from "isomorphic-unfetch";

export default async function handler(req, res) {
  const queryId = parseInt(req.query.id ?? 0);

  const allPhotos = await fetch(
    "https://jsonplaceholder.typicode.com/photos"
  ).then((response) => response.json());

  const photo = allPhotos.find(({ id }) => id === queryId);

  res.status(200).json(photo);
}
