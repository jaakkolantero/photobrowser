import fetch from "isomorphic-unfetch";

export default async function handler(req, res) {
  const queryId = parseInt(req.query.id ?? 0);

  const allPhotos = await fetch(
    `${process.env.BASE_URL}/api/cache/photos`
  ).then((response) => response.json());

  const photo = allPhotos.find(({ id }) => id === queryId);

  res.status(200).json(photo);
}
