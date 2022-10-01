import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Slider = styled(motion.div)``;

const Row = styled(motion.div)`
  padding-top: 74px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  /* background-size: cover;
  background-position: center center; */
  width: 1240px;
  height: 508px;
  background-color: gray;
  border-radius: 20px;
`;

const BoxCurrent = styled(motion.div)`
  width: 100px;
  height: 100px;
`;

const MoveButton = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  fill: #696969;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    fill: white;
  }
`;

export default function TopSlider() {
  return (
    <>
      <Slider>
        <Row>
          <MoveButton style={{ left: "5vw" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </MoveButton>
          <MoveButton style={{ right: "5vw" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </MoveButton>
          <Box></Box>
        </Row>
        <BoxCurrent></BoxCurrent>
      </Slider>
    </>
  );
}
