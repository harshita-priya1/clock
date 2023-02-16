import React from "react";
import { useState, useEffect } from "react";
import "./Clock.css";

function Clock() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const dt = new Date();
    let h = dt.getHours();
    const m = dt.getMinutes();
    const s = dt.getSeconds();
    if (h > 12) {
      h = h - 12;
    }
    setHour(h * 30 + (m * 1) / 2 + (s * 1) / 120);
    setMin(m * 6 + (s * 1) / 10);
    setSec(s * 6);
    console.log(hour, min, sec);

    const interval = setInterval(() => {
      setHour((hour) => hour + 1 / 120);
      setMin((min) => min + 1 / 10);
      setSec((sec) => sec + 6);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
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
