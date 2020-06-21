import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";
import { differenceInMinutes } from "date-fns";

interface CacheFairy {
  last_edit?: Date | number;
  data?: any;
}

let cacheFairy: CacheFairy = {};
const updateIntervalMins = 20;

const update = (data: any) => {
  cacheFairy = {
    ...cacheFairy,
    last_edit: new Date(),
    data,
  };
};

const shouldUpdate = () => {
  if (cacheFairy.data && cacheFairy.last_edit) {
    if (
      differenceInMinutes(new Date(), cacheFairy.last_edit) >=
      updateIntervalMins
    ) {
      console.log(
        "update cache. Next update in ",
        cacheFairy.last_edit &&
          updateIntervalMins -
            differenceInMinutes(new Date(), cacheFairy.last_edit),
        "mins"
      );
      return true;
    } else {
      console.log(
        "return cache. Next update in ",
        cacheFairy.last_edit &&
          updateIntervalMins -
            differenceInMinutes(new Date(), cacheFairy.last_edit),
        "mins"
      );
      return false;
    }
  }
  console.log("save to cache");
  return true;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (shouldUpdate()) {
    const updateCache = await fetch(
      `https://jsonplaceholder.typicode.com/photos`
    ).then((data) => data.json());

    update(updateCache);
  }
  res.status(200).json(cacheFairy.data);
};
