import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../component/Navbar/Navbar";
import Services from "../../component/Service/Services";
import Footer from "../../component/Footer/Footer";
import Web from "../../component/Service/Website/Web";
import Tech from "../../component/Service/Website/Tech";
import Faq from "../../component/Service/Website/Faq";
import Mainfaq from "../../component/Service/Website/Mainfaq";

const Website = () => {

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
        <title>Website Development - BerryBrainTech | Custom Web Solutions</title>
        <meta
          name="description"
          content="Get custom web development services with BerryBrainTech. We offer dynamic, responsive websites built to empower your business and boost online presence."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="website development, custom websites, responsive design, web development services, BerryBrainTech"
        />
        <meta property="og:title" content="Website Development - BerryBrainTech" />
        <meta
          property="og:description"
          content="BerryBrainTech specializes in building cutting-edge websites that drive business success. Learn more about our web development services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://berrybraintech.com/web-development" />
        {/* Add the JSON-LD schema inside the Helmet */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="z-10 relative">
        <Web />
        <Tech />
        <Faq />
        <Mainfaq />
      </div>
    </div>
  );
};

export default Website;
