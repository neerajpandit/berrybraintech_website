import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../../component/Service/Services';

const Serv = () => {
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
        <title>Our Services - BerryBrainTech | Web Development, App Development & More</title>
        <meta
          name="description"
          content="Explore the range of services offered by BerryBrainTech, including web development, mobile application development, SEO, and digital marketing solutions."
        />
        <meta
          name="keywords"
          content="services, web development, app development, SEO, digital marketing, BerryBrainTech"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Our Services - BerryBrainTech" />
        <meta
          property="og:description"
          content="Discover the wide array of services BerryBrainTech offers, from custom web development to innovative mobile app solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://berrybraintech.com/service" />
        {/* Add the JSON-LD schema inside the Helmet */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="z-10 relative">
        <Services />
      </div>
    </div>
  );
};

export default Serv;
