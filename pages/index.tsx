import fetch from "../lib/fetch";
import useSWR, { useSWRPages } from "swr";
import Item from "../components/item";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import Content from "../components/content";

export default () => {
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages(
    // page key
    "photoviewer-grid-page",

    // page component
    ({ offset, withSWR }) => {
      const { data: photos } = withSWR(
        // use the wrapper to wrap the *pagination API SWR*
        useSWR("/api/photos?offset=" + (offset || 0), fetch)
      );
      // you can still use other SWRs outside

      if (!photos) {
        return (
          <p className="py-4 w-full flex justify-center text-gray-500 text-2xl">
            loading
          </p>
        );
      }

      return photos.map((photo) => (
        <div className="m-2">
          <Item photo={photo} />
        </div>
      ));
    },

    // one page's SWR => offset of next page
    ({ data: photos }) => {
      console.log("photos", photos);
      return photos && photos.length ? photos[photos.length - 1].id : null;
    },

    // deps of the page component
    []
  );

  return (
    <Layout>
      <Header />
      <Content>
        <div className="mb-4 flex flex-wrap justify-around">{pages}</div>
        <div className="flex justify-center">
          <button
            className="antialiased py-2 px-4 bg-black text-white rounded shadow transition duration-200 ease-in-out hover:bg-gray-900 transform hover:scale-110"
            onClick={loadMore}
            disabled={isReachingEnd || isLoadingMore}
          >
            {isLoadingMore
              ? "loading more"
              : isReachingEnd
              ? "no more data"
              : "load more"}
          </button>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};
