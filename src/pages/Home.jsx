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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BerryBrainTech",
    "alternateName": "verybraintech, berybraintech, berry brain tech, bery brain tech, bery braintech, berry braintech",
    "url": "https://www.berrybraintech.com",
    "sameAs": [
      "https://www.linkedin.com/company/berrybraintech",
      "https://www.instagram.com/berrybraintech",
      "https://m.facebook.com/61554289650556/",
      "https://www.twitter.com/berrybraintech"
    ]
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Helmet>
        <title>BerryBrainTech - Home | Empower Your Business</title>
        <meta
          name="description"
          content="BerryBrainTech provides top-notch services in web development, application development, SEO, UI/UX and digital marketing. Empower your business with our innovative solutions."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="web development, SEO, application development, BerryBrainTech, business solutions" />
        <meta property="og:title" content="BerryBrainTech - Empower Your Business" />
        <meta property="og:description" content="BerryBrainTech offers web development, UI/UX, SEO, and digital marketing services to elevate your business." />
        <meta property="og:url" content="https://berrybraintech.com" />
        <meta property="og:type" content="website" />

        {/* Add the JSON-LD schema inside the Helmet */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
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
