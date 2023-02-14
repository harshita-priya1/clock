import React from "react";
import { useState, useEffect } from "react";
import "./Clock.css";

function Clock() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    let dt = new Date();
    dt = dt.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    let h = dt.split(":")[0];
    const m = dt.split(":")[1];
    const s = dt.split(":")[2];
    if (h > 12) {
      h = h - 12;
    }
    setHour((hour) => hour + h * 30 + (m * 1) / 2 + (s * 1) / 120);
    setMin((min) => min + m * 6 + (s * 1) / 10);
    setSec((sec) => sec + s * 6);

    setInterval(() => {
      setHour((hour) => hour + 1 / 120);
      setMin((min) => min + 1 / 10);
      setSec((sec) => sec + 6);
    }, 1000);
  }, []);

  return (
    <div className="clock">
      <div className="clock-face">
        <div
          className="hand hour-hand"
          style={{
            transform: `rotate(${hour}deg)`,
            transformOrigin: "center bottom",
          }}
        ></div>
        <div
          className="hand min-hand"
          style={{
            transform: `rotate(${min}deg)`,
            transformOrigin: "center bottom",
          }}
        ></div>
        <div
          className="hand sec-hand"
          style={{
            transform: `rotate(${sec}deg)`,
            transformOrigin: "center bottom",
          }}
        ></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Clock;
