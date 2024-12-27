import React from 'react';
import TrustedPartners from '../components/TrustedPartners'; // Import TrustedPartners component
import aboutUsImage from '../assets/images/about-us-video-img.png'; // Make sure the image is placed in the correct path

const AboutPage = () => {

  return (
    <div className="site-container">
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
       <TrustedPartners />
    </div>
  );
};

export default AboutPage;
