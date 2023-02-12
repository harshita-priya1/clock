import React from "react";
import "./Clock.css";

function Clock() {
  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hand hour-hand"></div>
        <div className="hand min-hand"></div>
        <div className="hand second-hand"></div>
      </div>
    </div>
  );
}

export default Clock;
