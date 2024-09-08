import React, { useState } from "react";
import "./FlipCard.css";

const FlipCard = ({
  element,
  atomicNumber,
  molecularStructure,
  properties,
}) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="flip-card-inner">
        {/* Front side */}
        <div className="flip-card-front">
          <h2>{element}</h2>
        </div>

        {/* Back side */}
        <div className="flip-card-back">
          <h3>{element}</h3>
          <p>
            <span className="label">Atomic Number:</span>
            <span className="value">{atomicNumber}</span>
          </p>
          <p>
            <span className="label">Molecular Structure:</span>
            <span className="value">{molecularStructure}</span>
          </p>
          <p>
            <span className="label">Properties:</span>
            <span className="value">{properties}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
