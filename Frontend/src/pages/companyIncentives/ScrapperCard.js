 import React from "react";

const Card = ({img,title,subtitle,desc}) => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          {/* Background Glow Effects */}
          <div className="bg-layer">
            <div className="gradient-fade"></div>
            <div className="glow-circle big"></div>
            <div className="glow-circle small"></div>
            <div className="light-sweep"></div>
          </div>

          {/* Card Content */}
          <div className="card-content">
            <div className="icon-wrapper">
              <div className="icon-border"></div>
              <div className="icon-border pulse"></div>
              <div className="icon-inner">
                <div className="icon-rotate">
                      <img  style={{ height:'100px',width:'100px',borderRadius:'50%' }} alt="" src={img} className="img-fluid rounded-circle" />
                </div>
              </div>
            </div>

            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
            <p className="desc">{desc}</p>

            <div className="divider"></div>

            <div className="dots">
              <div className="dot"></div>
              <div className="dot delay1"></div>
              <div className="dot delay2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS inside same file */}
      <style>{`
        .card-container {
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1200px;
        }

        .card {
          position: relative;
          width: 100%;
         
          border-radius: 24px;
          background: linear-gradient(135deg, #0f0f0f, #0b0b0b);
          border: 1px solid rgba(255,0,0,0.3);
          box-shadow: 0 8px 30px rgba(0,0,0,0.6);
          overflow: hidden;
          transition: all 0.7s ease-in-out;
        }

        .card-container:hover .card {
          transform: scale(1.05) rotate(-1deg);
          border-color: rgba(255,0,0,0.5);
          box-shadow: 0 12px 40px rgba(255,0,0,0.3);
        }

        /* Background effects */
        .bg-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
        }

        .gradient-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,0,0,0.08), rgba(255,0,0,0.15));
          opacity: 0.4;
          transition: opacity 0.5s ease-in-out;
        }
        .card-container:hover .gradient-fade {
          opacity: 0.6;
        }

        .glow-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,0,0,0.15), transparent);
          filter: blur(60px);
          transition: transform 0.7s ease, opacity 0.7s ease;
        }
        .glow-circle.big {
          width: 180px; height: 180px;
          bottom: -60px; left: -60px;
          opacity: 0.4;
        }
        .glow-circle.small {
          width: 80px; height: 80px;
          top: 40px; right: 40px;
          opacity: 0.3;
        }
        .card-container:hover .glow-circle {
          transform: scale(1.1);
          opacity: 0.5;
        }

        .light-sweep {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,0,0,0.15), transparent);
          transform: skewX(-20deg) translateX(100%);
          transition: transform 1s ease;
        }
        .card-container:hover .light-sweep {
          transform: skewX(-20deg) translateX(-200%);
        }

        /* Content */
        .card-content {
          position: relative;
          z-index: 10;
          padding: 2rem;
          text-align: center;
          color: white;
        }

        .icon-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 1.5rem;
        }
        .icon-border {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(255,0,0,0.2);
          animation: ping 2s infinite;
        }
        .icon-border.pulse {
          border-width: 1px;
          border-color: rgba(255,0,0,0.1);
          animation: pulse 3s infinite;
        }

        .icon-inner {
          padding: 1.5rem;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(30,30,30,0.8));
          border: 1px solid rgba(255,0,0,0.3);
          transition: all 0.5s ease-in-out;
        }
        .card-container:hover .icon-inner {
          transform: scale(1.1) rotate(12deg);
          box-shadow: 0 0 20px rgba(255,0,0,0.3);
        }

        .icon-rotate {
          transition: transform 0.7s ease-in-out;
        }
        .card-container:hover .icon-rotate {
          transform: rotate(180deg);
        }

        .icon {
          width: 32px; height: 32px;
          fill: #ff4444;
          transition: fill 0.3s ease-in-out;
        }
        .card-container:hover .icon {
          fill: #ff6666;
        }

        .title {
          font-size: 3rem;
          font-weight: bold;
          background: linear-gradient(to right, #ff5555, #ff2222, #ff5555);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .desc {
          font-size: 1.2rem;
          color: #d0c7c7ff;
          transition: color 0.3s ease-in-out;
        }
        .card-container:hover .desc {
          color: #ddd;
        }

        .divider {
          margin: 1.5rem auto 0;
          width: 30%;
          height: 2px;
          background: linear-gradient(to right, transparent, #ff4444, transparent);
          border-radius: 2px;
          transition: all 0.5s ease-in-out;
        }
        .card-container:hover .divider {
          width: 50%;
          height: 3px;
        }

        .dots {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
          opacity: 0.6;
          transition: opacity 0.3s ease-in-out;
        }
        .card-container:hover .dots {
          opacity: 1;
        }
        .dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #ff4444;
          margin: 0 4px;
          animation: bounce 1.5s infinite;
        }
        .dot.delay1 { animation-delay: 0.2s; }
        .dot.delay2 { animation-delay: 0.4s; }

        /* Animations */
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
};

export default Card;
