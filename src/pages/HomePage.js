import React from 'react';
import HeroBanner from '../components/HeroBanner';
import TrustedPartners from '../components/TrustedPartners'; // Import TrustedPartners component
import aboutUsImage from '../assets/images/about-us-video-img.png'; // Make sure the image is placed in the correct path
import Benefits from '../components/Benefits';

const HomePage = () => {
    const stats = [
        { value: '80%', label: 'Time Saved', color: '#FF6B6B' },
        { value: '50%', label: 'Cost Saving', color: '#FFC75F' },
        { value: '14k', label: 'Users', color: '#4BC0C0' },
        { value: '365', label: 'Days', color: '#8E44AD' },
    ];
  return (
    <div className="site-container">
       <HeroBanner /> {/* Add the HeroBanner component */}
       <TrustedPartners />
       <section className="about-us-section">
            <div className="site-container">
                <div className="about-us-inner">
                {/* About Us Image */}
                <div className="about-us-img-bx">
                    <img className="about-us-img" src={aboutUsImage} alt="About Us" />
                </div>

                {/* About Us Content */}
                <div className="about-us-content-bx">
                    <div className="content-title-wrapper">
                    <span className="ct-txt">About Us</span>
                    <div className="ct-hr"></div>
                    </div>
                    <h2>
                    Transform Your Hiring <span className="gradient-txt">Process</span>
                    </h2>
                    <p>
                    PramitiHR utilizes cutting-edge generative AI technology to streamline hiring. From automated interviews to comprehensive assessment reports, we simplify the candidate selection process.
                    </p>
                    <div className="white-space"></div>
                    <a className="site-btn" href="#">
                    Read More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--ic"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                    >
                        <path
                        fill="currentColor"
                        d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                        ></path>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
        </section>
        <Benefits />
        <section className="key-statistics-section">
            <div className="site-container">
                <div className="section-header">
                <div class="content-title-wrapper"><div class="ct-hr"></div><span class="ct-txt">Key Statistics</span><div class="ct-hr"></div></div>
                <h2>
                    Impact at a <span className="gradient-txt">Glance</span>
                </h2>
                </div>
                <div className="statistics-grid">
                {stats.map((stat, index) => (
                    <div className="stat-item" key={index}>
                    <span className="stat-value" style={{ color: stat.color }}>
                        {stat.value}
                    </span>
                    <p>{stat.label}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    </div>
  );
};

export default HomePage;
