import React, { useState } from "react";
import "./index.scss";

interface HighlightPointProps {
  pointX: number;
  pointY: number;
  diagEndX: number;
  diagEndY: number;
  lineEndX: number;
  lineEndY: number;
  labelX: number;
  labelY: number;
  text: string;
}

const HighlightPoint: React.FC<HighlightPointProps> = ({
  pointX,
  pointY,
  diagEndX,
  diagEndY,
  lineEndX,
  lineEndY,
  labelX,
  labelY,
  text,
}) => {
  const [hovered, setHovered] = useState(false);

  const linePath = `M ${pointX} ${pointY} L ${diagEndX} ${diagEndY} L ${lineEndX} ${lineEndY}`;

  return (
    <div className="highlight-container">
      <svg className="highlight-svg">
        <g
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`highlight-dot ${hovered ? "hovered" : ""}`}
        >
          <circle cx={pointX} cy={pointY} r="4" className="dot-inner" />
          <circle cx={pointX} cy={pointY} r="12" className="dot-outer" />
        </g>
        <path
          d={linePath}
          className={`highlight-line ${hovered ? "draw" : ""}`}
        />
      </svg>
      <div
        className={`highlight-label ${hovered ? "visible" : ""}`}
        style={{ left: `${labelX}px`, top: `${labelY}px` }}
      >
        <span dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
};

export default HighlightPoint;
