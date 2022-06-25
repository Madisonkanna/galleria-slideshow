import { FC } from "react";
import { GetStaticProps } from "next";
import getData from "../../api";
import { Listing } from "../../models/Listing";

interface ListingPageProps {
  listing: Listing;
}

const ListingPage: FC<ListingPageProps> = ({ listing }) => {
  console.log(listing, "listing!");

  return <div>{listing.name}</div>;
};

export async function getStaticPaths() {
  const listings = getData();
  const paths = listings.map((listing) => ({
    params: { id: listing.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const listings = getData();
  const listing = listings.find(
    (listing) => listing.id.toString() === params.id
  );

  return {
    props: {
      listing: listing,
    },
  };
};

export default ListingPage;
