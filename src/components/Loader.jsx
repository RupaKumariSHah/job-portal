import React, { useState, useEffect, useMemo } from "react";
import "./Loader.css";

const Loader = ({ onExitComplete, minDisplayTime = 2000 }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  const stars = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      tx: (Math.random() - 0.5) * 2000,
      ty: (Math.random() - 0.5) * 2000,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
  }, []);

  useEffect(() => {
    // Ensure loader shows for at least minDisplayTime
    const timer = setTimeout(() => {
      setIsExiting(true);
      
      // Wait for exit animation to complete
      const exitTimer = setTimeout(() => {
        if (onExitComplete && !hasCompleted) {
          setHasCompleted(true);
          onExitComplete();
        }
      }, 800);
      
      return () => clearTimeout(exitTimer);
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [onExitComplete, minDisplayTime, hasCompleted]);

  return (
    <div className={`sky-arena ${isExiting ? "exit" : ""}`}>
      {/* Deep Space Background */}
      <div className="nebula-drift"></div>

      {/* Starfield Layer */}
      <div className="star-voyager">
        {stars.map((star) => (
          <div
            key={star.id}
            className="traveling-star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              "--tx": `${star.tx}px`,
              "--ty": `${star.ty}px`,
              "--dur": `${star.duration}s`,
              "--del": `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Central Celestial Core */}
      <div className="celestial-manifest">
        <div className="core-aura"></div>
        <div className="orbital-ring-system">
          <div className="satellite p1"></div>
          <div className="satellite p2"></div>
        </div>
        
        <img
          src="./loading.png"
          alt="Logo"
          className="logo-sigil"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%233b82f6'/%3E%3Ctext x='50' y='65' text-anchor='middle' fill='white' font-family='Arial' font-size='35'%3EJP%3C/text%3E%3C/svg%3E";
          }}
        />
        
        {/* <div className="loading-text">Preparing Experience</div> */}
      </div>
    </div>
  );
};

export default Loader;