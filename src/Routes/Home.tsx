import styled from "styled-components";
import SimpleSlider from "../Components/Slider";
import Responsive from "../Components/BottomSlider";
import Footer from "../Components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  width: 1240px;
`;

const AdImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 96px;
  background-color: black;
  margin: 50px 0;
  /* ↓↓↓↓↓ Text Code ↓↓↓↓↓ */
  color: white;
  font-size: 25px;
  font-weight: bold;
`;

export default function Home() {
  return (
    <>
      <Wrapper>
        <SimpleSlider />
        <Title>
          <h1>Title 1</h1>
        </Title>
        <Responsive />
        <Title>
          <h1>Title 2</h1>
        </Title>
        <Responsive />
        <Title>
          <h1>Title 3</h1>
        </Title>
        <Responsive />
        <AdImg>Ad</AdImg>
        <Title>
          <h1>Title 4</h1>
        </Title>
        <Responsive />
        <Footer />
      </Wrapper>
    </>
  );
}
