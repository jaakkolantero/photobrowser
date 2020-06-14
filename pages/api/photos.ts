import fetch from "isomorphic-unfetch";

export default async function handler(req, res) {
  const offset = parseInt(req.query.offset ?? 0);
  console.log("offset", offset);

  const allPhotos = await fetch(
    "https://jsonplaceholder.typicode.com/photos"
  ).then((response) => response.json());

  const photoPage = allPhotos.slice(offset, offset + 12);
  res.status(200).json(photoPage);
}
