import React from "react";
import styled from "styled-components";

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const handleColorChange = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const Square = () => {
  return <SquareWrapper></SquareWrapper>;
};

const SquareWrapper = styled.div`
  background-color: #1d1d1d;
  box-shadow: 0 0 2px #000;
  height: 16px;
  width: 16px;
  margin: 2px;
  transition: 2s ease;
  &:hover {
    transition-duration: 0s;
    background-color: ${() => handleColorChange};
  }
`;

export default Square;
