import data from "./db/data.json";
import { Listing } from "./models/Listing";

export default function getData() {
  return data.map((listing: Listing, i) => {
    listing.id = i + 1;
    return listing;
  });
}
