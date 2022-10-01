import styled from "styled-components";
import SimpleSlider from "../Components/Slider";
import Responsive from "../Components/BottomSlider";

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

export default function Home() {
  return (
    <>
      <Wrapper>
        <SimpleSlider />
        <Title>
          <h1>실시간 인기 콘텐츠</h1>
        </Title>
        <Responsive />
        <Title>
          <h1>오직 웨이브에서</h1>
        </Title>
        <Responsive />
        <Title>
          <h1>그 시절, 내가 좋아했던 너</h1>
        </Title>
        <Responsive />
      </Wrapper>
    </>
  );
}
