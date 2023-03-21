import React from "react";
import Banner from "./Banner";
import SectionOne from "./SectionOne";
import StickySideBar from "./StickySideBar";

const Home = () => {
  return (
    <>
      <StickySideBar whatsapp={9811718981} />
      <Banner />
      <SectionOne />
    </>
  );
};

export default Home;
