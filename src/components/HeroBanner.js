import React from 'react';
import homehero from '../assets/images/Home-hero-img.png'; // Corrected import path

const HeroBanner = () => {
  return (
    <section className="home-hero-section">
      <div className="site-container">
        <div className="home-hero-inner">
          {/* Hero Content */}
          <div className="hero-content-bx">
            <div className="content-title-wrapper">
              <div className="ct-hr"></div>
              <span className="ct-txt">#1 Hiring Talent Platform</span>
            </div>
            <h1>
              <span className="gradient-txt">Unlock</span> The Future of Hiring with{' '}
              <span className="gradient-txt">PramitiHR</span>
            </h1>
            <p>
              <b> &gt;&gt; </b> Quickly shortlist candidates based on AI-driven analytics.
            </p>
            <p>
              <b> &gt;&gt; </b> Conduct interviews that adapt to candidate responses for deeper insights.
            </p>
            <div className="white-space"></div>
            <a className="site-btn" href="#">
              Register Now{' '}
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

          {/* Hero Image */}
          <div className="hero-img-bx">
            <img src={homehero} className="home-hero-img" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
