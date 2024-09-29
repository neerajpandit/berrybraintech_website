import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../../component/About/About';

const Us = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Helmet>
        <title>About Us - BerryBrainTech | Your Trusted Technology Partner</title>
        <meta
          name="description"
          content="Learn more about BerryBrainTech, a leading provider of web development, application development, and digital solutions. Discover our mission, values, and commitment to empowering businesses."
        />
        <meta
          name="keywords"
          content="About BerryBrainTech, web development, business solutions, application development, digital transformation"
        />
        <meta property="og:title" content="About Us - BerryBrainTech" />
        <meta
          property="og:description"
          content="BerryBrainTech offers expert web and application development services. Learn more about our journey and what drives our success."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://berrybraintech.com/us" />
      </Helmet>

      <div className="z-10 relative">
        <About />
      </div>
    </div>
  );
};

export default Us;
