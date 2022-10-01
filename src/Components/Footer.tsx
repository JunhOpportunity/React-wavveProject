import styled from "styled-components";
import VerticalSwipeToSlide from "./VerticalSlider";

const Wrap = styled.div`
  width: 100%;
  border: 1px solid gray;
  border-left: none;
  border-right: none;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Notice = styled.div`
  width: 1240px;
  height: 50px;
  display: flex;
  align-items: center;
`;

const Slide = styled.div`
  font-size: 20px;
  color: gray;
  font-weight: bold;
`;

const Title = styled.div`
  font-size: 20px;
  color: gray;
  font-weight: bold;
  padding-right: 20px;
`;

export default function Footer() {
  return (
    <>
      <Wrap>
        <Notice>
          <Title>Notice</Title>
          <VerticalSwipeToSlide />
        </Notice>
      </Wrap>
    </>
  );
}
