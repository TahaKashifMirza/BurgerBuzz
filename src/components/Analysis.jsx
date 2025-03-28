import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../CSS/Analysis.css'; // Import custom CSS

export const Analysis = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation once when scrolled into view
    threshold: 0.5,    // Trigger when 50% of the section is visible
  });

  return (
    <section className="analysis-section" id="analysis" ref={ref}>
      <div className="analysis-container">
        <div className="box box1">
          <span className="count">
            {inView && <CountUp start={0} end={10} duration={1.5} />}M+
          </span>
          <br />
          <span className="label"><strong>Happy Clients</strong></span>
        </div>
        <div className="box box2">
          <span className="count">
            {inView && <CountUp start={0} end={10} duration={1.5} />}M+
          </span>
          <br />
          <span className="label"><strong>Revenue</strong></span>
        </div>
        <div className="box box3">
          <span className="count">
            {inView && <CountUp start={0} end={5} duration={1.5} />}+
          </span>
          <br />
          <span className="label"><strong>Countries</strong></span>
        </div>
        <div className="box box4">
          <span className="count">
            {inView && <CountUp start={0} end={24} duration={1.5} />} / 7
          </span>
          <br />
          <span className="label"><strong>Services</strong></span>
        </div>
      </div>
    </section>
  );
};