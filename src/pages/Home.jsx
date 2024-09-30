import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../component/Hero/Hero";
import Work from "../component/Work/Work";
import Cards from "../component/Work/Cards";
import Product from "../component/Cards/Product";
import Step from "../component/Choose/Step";
import Test from "../component/Testinomial/Test"
import Contact from "../component/contact/Contact";
import LiveProject from "../component/Cards/LiveProject";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Helmet>
        <title>BerryBrainTech - Home | Empower Your Business</title>
        <meta
          name="description"
          content="BerryBrainTech provides top-notch services in web development, application development, SEO, and digital marketing. Empower your business with our innovative solutions."
        />
        <meta name="keywords" content="web development, SEO, application development, BerryBrainTech, business solutions" />
        <meta property="og:title" content="BerryBrainTech - Empower Your Business" />
        <meta property="og:description" content="BerryBrainTech offers web development, SEO, and digital marketing services to elevate your business." />
        <meta property="og:url" content="https://berrybraintech.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="z-10 relative">
        <Hero />
        <Work />
        <Cards />
        <Product />
        <Step />
        <LiveProject />
        <Test/>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
