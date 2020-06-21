import fetch from "isomorphic-unfetch";

export default async function handler(req, res) {
  const offset = parseInt(req.query.offset ?? 0);

  const allPhotos = await fetch(
    `${process.env.BASE_URL}/api/cache/photos`
  ).then((response) => response.json());

  const photoPage = allPhotos.slice(offset, offset + 12);
  res.status(200).json(photoPage);
}
