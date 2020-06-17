import React from "react";
import Link from "next/link";

const Item = ({ photo }) => {
  return (
    <Link href="/[id]" as={`/${photo.id}`}>
      <a>
        <div className="group relative w-300 h-300 rounded-lg overflow-hidden">
          <img
            className="w-300 h-300"
            key={photo.id}
            src={photo.thumbnailUrl}
            loading="lazy"
            alt={photo.title}
          />
          <div className="flex items-end absolute bottom-0 left-0 w-full h-full pb-2 pt-12 px-4 group-hover:bg-easing-b-item">
            <p className="py-2 text-gray-200 hidden group-hover:inline-block">
              {photo.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Item;
