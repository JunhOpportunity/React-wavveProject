import styled from "styled-components";
import { motion } from "framer-motion";

const Slider = styled(motion.div)``;

const Row = styled(motion.div)`
  padding-top: 74px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 1240px;
  height: 508px;
  background-color: gray;
`;

const BoxCurrent = styled(motion.div)`
  width: 100px;
  height: 100px;
`;

const MoveButton = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: white;
`;

export default function TopSlider() {
  return (
    <>
      <Slider>
        <Row>
          <MoveButton style={{ left: 0 }}></MoveButton>
          <MoveButton style={{ right: 0 }}></MoveButton>
          <Box></Box>
        </Row>
        <BoxCurrent></BoxCurrent>
      </Slider>
    </>
  );
}
