import React from 'react';
import './Cursor.css';

function Cursor({ position }) {
  const style = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    // zIndex is handled by CSS on .CursorSVG
  };

  // SVG Path for a simplified hand pointer.
  // This path is a placeholder and would ideally be more refined.
  // M = Move to, L = Line to, Q = Quadratic Bezier curve, C = Cubic Bezier curve, Z = Close path
  // A very basic pointer shape - more like a fat arrow with a rounded end and a base.
  const handPathData =
    "M4,2 L28,2 Q30,2 30,4 L30,20 " + // Top finger part, rounded tip
    "Q30,22 28,22 L20,22 L20,44 " +   // Palm part, extending downwards
    "Q20,46 18,46 L14,46 Q12,46 12,44 L12,22 L4,22 Q2,22 2,20 L2,4 Q2,2 4,2 Z";

  return (
    // Approach: Inline SVG for the cursor
    <svg
      width="32" // Adjusted for the new viewBox
      height="48" // Adjusted for the new viewBox
      viewBox="0 0 32 48" // Internal coordinate system of the SVG
      style={style}
      className="CursorSVG" // Class for CSS styling
      // filter="url(#cursorDropShadow)" // Apply SVG filter
    >
      <defs>
        <filter id="cursorDropShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1" dy="1" stdDeviation="1.5" floodColor="#007bff" floodOpacity="0.7" />
        </filter>
      </defs>
      <path
        d={handPathData}
        fill="#FFFFFF"
        stroke="#007bff" // Blueish stroke, similar to Wii highlights
        strokeWidth="1.5"
        // Using CSS filter for broader compatibility and easier tweaking for now
        // filter="url(#cursorDropShadow)"
      />
      {/* The old div-based cursor is commented out below */}
      {/* <div className="Cursor" style={style}></div> */}
    </svg>
  );
}

export default Cursor;
