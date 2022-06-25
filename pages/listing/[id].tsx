import { FC } from "react";
import { GetStaticProps } from "next";
import getData from "../../api";
import { Listing } from "../../models/Listing";
import styles from "../../styles/listingPage.module.scss";

interface ListingPageProps {
  listing: Listing;
}

const ListingPage: FC<ListingPageProps> = ({ listing }) => {
  console.log(listing, "listing!");

  return (l
    <div className={styles.listingPage}>
      <div className={styles.leftContainer}>
        <div className={}></div>
        <img src={`/${listing.images.gallery}`}></img>
        <div className={styles.titleContainer}>
          <h2>{listing.name}</h2>
          <div className={styles.authorName}>{listing.artist.name}</div>
        </div>
      </div>
      <div className={styles.rightContainer}>Right</div>
    </div>
  );
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
