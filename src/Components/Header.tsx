import styled from "styled-components";
import { Link, useMatch, useNavigate } from "react-router-dom";

const Nav = styled.div`
  position: fixed;
  width: 100%;
  height: 74px;
  background-color: #1b1b1b;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px white solid;
  z-index: 99;
`;

const HeadBundle = styled.div`
  width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 20px;
`;

const Col = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const Logo = styled.div`
  fill: white;
  width: 108px;
  height: 24px;
  font-size: 20px;
  cursor: pointer;
`;

const Img = styled.img``;

const logoClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Item = styled.li`
  font-size: 20px;
  color: ${(props) => props.color};
  font-weight: bold;
`;

const Search = styled.div`
  width: 50px;
  height: 15px;
  fill: #696969;
`;

// 현재 주소=? : true => white, false => #696969

export default function Navbar() {
  const isHome = useMatch("/");
  const isCategory = useMatch("/category");
  const isLive = useMatch("/live");
  const isMy = useMatch("/my");

  return (
    <>
      <Nav>
        <HeadBundle>
          <Col>
            <Logo>
              <Img
                onClick={logoClick}
                src="	https://www.wavve.com/img/ci-wavve.5b304973.svg"
              />
            </Logo>
            <Items>
              <Item color={isHome != null ? "White" : "#696969"}>
                <Link to="/">홈</Link>
              </Item>
              <Item color={isCategory != null ? "White" : "#696969"}>
                <Link to="/category">카테고리</Link>
              </Item>
              <Item color={isLive != null ? "White" : "#696969"}>
                <Link to="live">Live</Link>
              </Item>
              <Item color={isMy != null ? "White" : "#696969"}>
                <Link to="my">My</Link>
              </Item>
              <Item color={"red"}>
                <Link to="test">TEST-Page</Link>
              </Item>
            </Items>
          </Col>
          <Search>
            <svg>
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Search>
        </HeadBundle>
      </Nav>
    </>
  );
}
