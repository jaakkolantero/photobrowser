import React from "react";
import fetch from "../lib/fetch";
import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import Content from "../components/content";
import Link from "next/link";

const Item = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: photo } = useSWR("/api/photo?id=" + (id || 0), fetch);

  if (!photo) return <div>loading</div>;
  return (
    <>
      <Layout>
        <Header />
        <Content>
          <Link href="/">
            <a className="uppercase text-xl font-black text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 fill-current inline"
                viewBox="0 0 24 24"
              >
                <path d="M14.7 15.3a1 1 0 01-1.4 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 011.4 1.4L11.42 12l3.3 3.3z" />
              </svg>
              back
            </a>
          </Link>
          <h2 className="text-xl md:text-4xl text-gray-800 uppercase">
            {photo.title}
          </h2>
          <hr className="my-4" />
          <div className="w-full flex justify-center">
            <img
              className="shadow-lg max-w-full h-auto"
              key={photo.id}
              src={photo.url}
              loading="lazy"
              alt={photo.title}
            />
          </div>
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

export default Item;
