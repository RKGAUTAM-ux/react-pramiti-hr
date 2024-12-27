import React from 'react';
import efficiencyIcon from '../assets/images/keyb-1.png';
import accuracyIcon from '../assets/images/keyb-2.png';
import scalabilityIcon from '../assets/images/keyb-3.png';
import userFriendlyIcon from '../assets/images/keyb-4.png';
import costEffectiveIcon from '../assets/images/keyb-5.png';
import dataSecurityIcon from '../assets/images/keyb-6.png';

const Benefits = () => {
    const benefits = [
        {
          icon: efficiencyIcon,
          title: 'Efficiency',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
          icon: accuracyIcon,
          title: 'Accuracy',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
          icon: scalabilityIcon,
          title: 'Scalability',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
          icon: userFriendlyIcon,
          title: 'User-Friendly Interface',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          icon: costEffectiveIcon,
          title: 'Cost-Effective',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
          icon: dataSecurityIcon,
          title: 'Data Security',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
    ];

  return (
    <section className="benefits-section">
        <div className="section-header">
          <div className="content-title-wrapper"><div className="ct-hr"></div><span className="ct-txt">Why Choose PramitiHR?</span><div className="ct-hr"></div></div>
          <h2>
            Key <span className="gradient-txt">Benefits</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-item" key={index}>
              <img src={benefit.icon} alt={benefit.title} className="benefit-icon" />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Benefits;
