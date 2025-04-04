
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="animate-fade-up">
            We build digital products that<br />
            <span className="text-studio-accent">sell themselves</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            33 Digital is a venture and product studio based in Austin, Texas. We partner 
            with early-stage founders to launch scalable, self-sustaining businesses.
          </p>
          <p className="mt-4 text-lg text-gray-300 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Partnering with 33 Digital is an investment in what your product becomes.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/about" className="btn-primary px-8 py-3">
              See How We Work
            </Link>
          </div>
        </div>

        <div className="separator"></div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">We are not advisors. We are builders.</h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              We stake sweat equity and deep product expertise into every company we back. From zero to one and beyond,
              we help founders turn early ideas into products that acquire, convert, and grow naturally.
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              We combine product strategy, design, go-to-market execution, and growth into one focused approach. 
              We build digital products that scale themselves.
            </p>
            <Link to="/about" className="btn-outline px-8 py-3">
              About Us
            </Link>
          </div>
        </div>
        
        <div className="separator"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Work</h2>
          <p className="text-xl text-gray-300 mb-4">
            At 33 Digital, we build digital products that scale themselves.
          </p>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            We work side by side with early-stage founders to turn ambitious ideas into self-sustaining businesses. 
            Whether it's embedding AI to unlock leverage, designing products that grow through community, 
            or building game-like systems that keep people coming back, we help founders build momentum from day one.
          </p>
          <Link to="/portfolio" className="btn-outline px-8 py-3">
            See Our Work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
