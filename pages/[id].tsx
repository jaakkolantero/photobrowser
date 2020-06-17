import React from "react";
import fetch from "../lib/fetch";
import { useRouter } from "next/router";
import useSWR from "swr";

const Item = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: photo } = useSWR("/api/photo?id=" + (id || 0), fetch);

  if (!photo) return <div>loading</div>;
  return <p>Post: {photo.title}</p>;
};

export default Item;
