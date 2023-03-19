import React from "react";
import Banner from "./Banner";
import SectionOne from "./SectionOne";
import StickySideBar from "./StickySideBar";

const Home = () => {
  return (
    <>
      <StickySideBar whatsapp={6387797327} />
      <Banner />
      <SectionOne />
    </>
  );
};

export default Home;
