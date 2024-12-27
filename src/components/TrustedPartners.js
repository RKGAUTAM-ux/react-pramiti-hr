import React from 'react';
import disneyLogo from '../assets/images/disny-logo.png';
import logo1 from '../assets/images/logo-1.png';
import logo2 from '../assets/images/logo-2.png';
import logo3 from '../assets/images/logo-3.png';
import logo4 from '../assets/images/logo-4.png';
import logo5 from '../assets/images/logo-5.png';

const TrustedPartners = () => {
  return (
    <section className="trusted-partner-section">
      <div className="site-container">
        <p>Trusted by 100+ fast-growing companies</p>
        <div className="trusted-partner-inner">
          <img src={disneyLogo} alt="Disney Logo" />
          <img src={logo1} alt="Logo 1" />
          <img src={logo2} alt="Logo 2" />
          <img src={logo3} alt="Logo 3" />
          <img src={logo4} alt="Logo 4" />
          <img src={logo5} alt="Logo 5" />
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
