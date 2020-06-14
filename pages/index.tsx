import fetch from "../lib/fetch";
import useSWR, { useSWRPages } from "swr";
import Item from "../components/item";

//TODO: add dialog for single photo

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
        //TODO: add skeleton for loading homepage
        return <p>loading</p>;
      }

      return photos.map((photo) => <Item photo={photo} />);
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
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 pt-12 pb-24 px-10 bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-500 flex justify-center mb-4">
          photobrowser
        </h1>
        <hr className="mb-2" />
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3">
          {pages}
        </div>
        <div className="flex justify-center">
          <button
            className="antialiased py-2 px-4 bg-black text-white rounded shadow transition duration-200 ease-in-out hover:bg-gray-900 transform hover:scale-110"
            onClick={loadMore}
            disabled={isReachingEnd || isLoadingMore}
          >
            {isLoadingMore
              ? //TODO: add lottie loading animation
                "loading more"
              : isReachingEnd
              ? "no more data"
              : "load more"}
          </button>
        </div>
      </div>
      <div className="bg-black text-white py-12 px-10 flex justify-center">
        <a
          className="text-blue-400 hover:text-blue-600"
          href="https://github.com/jaakkolantero"
        >
          @jaakkolantero
        </a>
      </div>
    </div>
  );
};
