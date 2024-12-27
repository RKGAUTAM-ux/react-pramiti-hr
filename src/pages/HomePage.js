import React from 'react';
import HeroBanner from '../components/HeroBanner';
import TrustedPartners from '../components/TrustedPartners'; // Import TrustedPartners component
import aboutUsImage from '../assets/images/about-us-video-img.png'; // Make sure the image is placed in the correct path
import HiringOne from '../assets/images/hiring1.png';
import HiringTwo from '../assets/images/hiring2.png';
import HiringThree from '../assets/images/hiring3.png';
import assessment from '../assets/images/assessment.png';
import sampleImage from "../assets/images/sampleImage.png";

import Benefits from '../components/Benefits';
import TransparentPricing from '../components/TransparentPricing';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';
const HomePage = () => {
    const stats = [
        { value: '80%', label: 'Time Saved', color: '#FF6B6B' },
        { value: '50%', label: 'Cost Saving', color: '#FFC75F' },
        { value: '14k', label: 'Users', color: '#4BC0C0' },
        { value: '365', label: 'Days', color: '#8E44AD' },
    ];
    const steps = [
        {
          title: "Resume Submission",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          icon: HiringOne,
        },
        {
          title: "Automated Screening",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          icon: HiringTwo,
        },
        {
          title: "Candidate Selection",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          icon: HiringThree,
        },
    ];
  return (
    <div className="site-container">
       <HeroBanner /> {/* Add the HeroBanner component */}
       <TrustedPartners />
       <section className="about-us-section">
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
        </section>
        <Benefits />
        <section className="key-statistics-section">
                <div className="section-header">
                    <div className="content-title-wrapper"><div className="ct-hr"></div><span className="ct-txt">Key Statistics</span><div className="ct-hr"></div></div>
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
        </section>
        <section className="hiring-process">
            <div className="content-title-wrapper"><div className="ct-hr"></div><span className="ct-txt">How It Works</span><div className="ct-hr"></div></div>
            <h2 className="hiring-process__subtitle">Simplified Hiring Process</h2>
            <div className="hiring-process__steps">
                {steps.map((step, index) => (
                <div className="hiring-process__step" key={index}>
                    <img src={step.icon} alt={step.title} className="hiring-icon" />
                    <h4 className="hiring-process__step-title">{step.title}</h4>
                    <p className="hiring-process__step-description">{step.description}</p>
                </div>
                ))}
            </div>
        </section>
        <section className="about-us-section">
            <div className="about-us-inner">
                {/* About Us Image */}
                <div className="about-us-img-bx">
                    <img className="about-us-img" src={assessment} alt="About Us" />
                </div>

                {/* About Us Content */}
                <div className="about-us-content-bx">
                    <div className="content-title-wrapper">
                    <span className="ct-txt">Assessment Results</span>
                    <div className="ct-hr"></div>
                    </div>
                    <h2>
                    Insightful Assessment <span className="gradient-txt">Reports</span>
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
        </section>
        <section className="call-to-action">
            <div className="call-to-action__content">
                <h2 className="call-to-action__title">Ready to Transform Your Hiring?</h2>
                <p className="call-to-action__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a className="site-btn" href="#">Register Now<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="iconify iconify--ic" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg></a>
            </div>
            <div className="call-to-action__image">
                <img src={sampleImage} alt="Person inviting to register" />
            </div>
        </section>
        <TransparentPricing />
        <FrequentlyAskedQuestions />
    </div>
  );
};

export default HomePage;
