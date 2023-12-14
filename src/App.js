import "./App.css";
import styled from "styled-components";
import Header from "./Header.js";
import WhiteCarousel from "./main/WhiteCarousel";
import StoreIntroduction from "./main/StoreIntroduction.js";
import CardSCarousel from "./main/CardSCarousel.js";
import CardLCarousel from "./main/CardLCarousel.js";
import CardLCarousel2 from "./main/CardLCarousel2.js";
import CardLCarousel3 from "./main/CardLCarousel3.js";

import Footer from "./Footer.js";
import { useEffect } from "react";

const AppWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f7;
`;

function App() {
  useEffect(() => {
    alert("이 포트폴리오는 상업적 용도로 사용되지 않습니다!");
  }, []);

  return (
    <AppWrapper>
      <Header />
      <WhiteCarousel />
      <StoreIntroduction />
      <CardSCarousel />
      <CardLCarousel />
      <CardLCarousel2 />
      <CardLCarousel3 />
      <Footer />
    </AppWrapper>
  );
}

export default App;
