import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Investors from "../components/Sections/Investors";
import FManagers from "../components/Sections/Fmanager";
import Ffounder from "../components/Sections/ffounder";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Investors/>
      <FManagers/>
      <Ffounder/>
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}


