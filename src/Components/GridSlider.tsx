import styled from "styled-components";

const Slide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const SlideSet = styled.div`
  width: 1240px;
`;

const Row = styled.div`
  width: 1240px;
  height: 360px;
  background: skyblue;
  display: grid;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);
`;

const Title = styled.h1`
  height: 40px;
  color: white;
`;

const Box = styled.div`
  padding: 0 10px;
  width: 240px;
  height: 360px;
  background-color: blue;
  border-radius: 10px;
`;

export default function GridSlider() {
  return (
    <>
      <Slide>
        <SlideSet>
          <Title>Content</Title>
          <Row>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Row>
        </SlideSet>
      </Slide>
    </>
  );
}
