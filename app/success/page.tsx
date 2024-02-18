'use client';
import React from 'react';
import './style.css';

const Sides: React.FC = () => (
  <>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
    <div className="side"></div>
  </>
);

const Cuboid: React.FC<{ type: string; index: number }> = ({ type, index }) => (
  <div className={`cuboid ${type}-${index}`}>
    <Sides />
  </div>
);

const NumberCuboids: React.FC<{ type: string; count: number }> = ({ type, count }) => (
  <>
    {Array.from({ length: count }, (_, i) => (
      <Cuboid key={i} type={type} index={i + 1} />
    ))}
  </>
);

const CubeNumberDisplay: React.FC = () => {
 const onClick = () => {
    window.location.href = '/';
  }
  return (
    <div className="content">
  <div className="wrapper-1">
    <div className="wrapper-2">
      <h1>Thank you !</h1>
      <p>Thanks for registering for Dragon Hacks 2024  </p>
      <p>We are excited to host you at Drexel, expect more communications soon!  </p>
      <button className="go-home" onClick={onClick}>
      go home
      </button>
    </div>
</div>
</div>
  );
};

export default CubeNumberDisplay;
