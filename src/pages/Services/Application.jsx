import React from "react";
import { Helmet } from "react-helmet-async";
import Appli from "../../component/Service/App/Appli";
import Tech from "../../component/Service/App/Tech";
import Faq from "../../component/Service/App/Faq";
import Mainfaq from "../../component/Service/App/Mainfaq";

const Application = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BerryBrainTech",
    "alternateName": "verybraintech, berybraintech, berry brain tech, bery brain tech",
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
        <title>Application Development Services | BerryBrainTech</title>
        <meta
          name="description"
          content="Expert application development services by BerryBrainTech. We offer scalable and high-performance mobile and web applications tailored to your business needs."
        />
        <meta
          name="keywords"
          content="application development, mobile apps, web apps, app development services, BerryBrainTech, scalable applications"
        />
        <meta property="og:title" content="Application Development Services" />
        <meta
          property="og:description"
          content="Professional application development services at BerryBrainTech, offering robust and scalable mobile and web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://berrybraintech.com/application-development" />

        {/* Add the JSON-LD schema inside the Helmet */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="z-10 relative">
        <Appli />
        <Tech />
        <Faq />
        <Mainfaq />
      </div>
    </div>
  );
};

export default Application;
