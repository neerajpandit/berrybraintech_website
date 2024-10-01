import React from 'react';
import { Helmet } from 'react-helmet-async';
import Seo from '../../component/Service/SEO/Seo';
import Chooseus from '../../component/Service/SEO/Chooseus';
import Stepseo from '../../component/Service/SEO/Stepseo';
import Faq from '../../component/Service/SEO/Faq';
import Mainfaq from '../../component/Service/SEO/Mainfaq';

const SEO = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BerryBrainTech",
    "alternateName": "verybraintech, berybraintech, berry brain tech, bery brain tech,bery braintech, berry braintech",
    "url": "https://www.berrybraintech.com",
    "sameAs": [
      "https://www.linkedin.com/company/berrybraintech",
      "https://www.instagram.com/berrybraintech",
      "https://m.facebook.com/61554289650556/",
      "https://www.twitter.com/berrybraintech"
    ]
  };
  return (
    <div>
      <Helmet>
        <title>SEO Services - Boost Your Online Presence | BerryBrainTech</title>
        <meta
          name="description"
          content="Leverage BerryBrainTech's expert SEO services to enhance your search engine rankings, drive organic traffic, and improve your online presence. Tailored solutions for your business."
        />
        <meta
          name="keywords"
          content="SEO services, search engine optimization, organic traffic, BerryBrainTech, online presence, improve SEO"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SEO Services - Boost Your Online Presence" />
        <meta
          property="og:description"
          content="BerryBrainTech offers expert SEO services to help businesses improve their online visibility and attract more organic traffic."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://berrybraintech.com/seo" />

        {/* Add the JSON-LD schema inside the Helmet */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        
      </Helmet>

      <Seo />
      <Stepseo />
      <Chooseus />
      <Faq />
      <Mainfaq />
    </div>
  );
};

export default SEO;
