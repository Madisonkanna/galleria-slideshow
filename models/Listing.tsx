import { Artist } from "./Artist";
export interface Listing {
  id: number;
  name: string;
  year: number;
  description: string;
  source: string;
  artist: Artist;
  images: {
    thumbnail: string;
    hero: {
      small: string;
      large: string;
    };
  };
  gallery: string;
}
