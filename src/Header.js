import styled from "styled-components";

import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { light } from "@mui/material/styles/createPalette";

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  height: 44px;
  background-color: #f5f5f7;
  font-family: "SF-Pro-Text", sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.022em;
  color: rgb(29, 29, 31);
  line-height: 1.58824;
`;

const HeaderNavContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 44px;
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  padding: 0 22px;
`;

const HeaderNavUlContainer = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  height: 44px;
  width: 100%;
  color: #333336;
  .nav_li {
    flex: 1;
    z-index: 90;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .curtain {
    display: none;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 44px;
    left: 0;
    border: 1px solid black;
    background-color: transparent;
    width: 100%;
    height: calc(100vh - 44px);
    backdrop-filter: blur(10px); /* 흐림 효과의 강도를 조절할 수 있습니다. */
    -webkit-backdrop-filter: blur(
      10px
    ); /* Safari 지원을 위해 -webkit- 접두사를 사용합니다. */
    transition: 0.5s ease-in-out;
  }
  &:hover > .curtain {
    display: block;
    opacity: 1;
  }
`;

const HeaderNavLi = styled.li`
  flex: 1;
  display: block;
  z-index: 90;

  .submenu_title {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .nav_li_submenu {
    overflow: hidden;
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: 0px;
    top: 44px;
    left: 0;
    opacity: 0; /* 초기에는 안 보이도록 설정 */
    transition: 0.5s ease-in-out;
  }
  .submenu {
    display: flex;
    padding: 16px 100px;
    height: 100%;
    width: 100%;
  }
  .submenu_sec {
    display: flex;
    padding: 8px;
    margin-right: 8px;
    width: 20%;
    /* border: 1px solid black; */
  }
  .submenu_sec_small {
    display: flex;
    padding: 8px;
    margin-right: 4px;
    width: 10%;
  }
  .submenu_sec_ul {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .submenu_sec_li {
    padding-left: 3px;
    text-align: left;
  }
  &:hover > label {
    background-color: white;
    color: black;
  }
  &:hover > .nav_li_submenu {
    width: 100%;
    opacity: 1;
    background-color: white;
    height: auto;
    padding-bottom: 80px;
  }
`;

export default function Header() {
  const head = {
    fontSize: "12px",
    fontWeight: 400,
    marginBottom: "24px",
  };
  const large = {
    fontSize: "24px",
    fontWeight: "700",
  };
  const small = {
    fontSize: "12px",
    fontWeight: "700",
    marginBottom: "3px",
  };
  return (
    <HeaderWrapper>
      <HeaderNavContainer>
        <HeaderNavUlContainer>
          <section className="curtain"></section>
          <HeaderNavLi>
            <label className="submenu_title">
              <AppleIcon style={{ transform: "translateY(-3px)" }} />
            </label>
          </HeaderNavLi>
          <HeaderNavLi>
            <label className="submenu_title">
              <span>스토어</span>
            </label>
            <div className="nav_li_submenu">
              <div className="submenu">
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li" style={head}>
                      쇼핑하기
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      최신 제품 쇼핑하기
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      Mac
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      iPad
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      iPhone
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      Apple Watch
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      액세서리
                    </li>
                  </ul>
                </span>
                <span className="submenu_sec_small">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li" style={head}>
                      빠른 링크
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      연말연시 선물 쇼핑하기
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      매장 찾기
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      주문 상태
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      연말연시 선물 쇼핑하기
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      Apple Trade In
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      할부 방식
                    </li>
                  </ul>
                </span>
                <span className="submenu_sec_small">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li" style={head}>
                      특별 할인 쇼핑하기
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      인증 리퍼비쉬 제품
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      교육
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      비지니스
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </HeaderNavLi>
          <HeaderNavLi>
            <label className="submenu_title">
              <span>Mac</span>
            </label>
            <div className="nav_li_submenu">
              <div className="submenu">
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li" style={head}>
                      Mac 살펴보기
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      Mac 모두 살펴보기
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      Macbook Air
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      Macbook Pro
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      iMac
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      Mac Mini
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      Mac Studio
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      Mac 비교하기
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      Mac은 뭐든 척척
                    </li>
                  </ul>
                </span>
                <span className="submenu_sec_small">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li" style={head}>
                      Mac 쇼핑하기
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      Mac 쇼핑하기
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      Mac 액세서리
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      Apple Trade In
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      할부방식
                    </li>
                  </ul>
                </span>
                <span className="submenu_sec_small">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li" style={head}>
                      그 외에 Mac 관련항목
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      Mac 지원
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      Mac을 위한 AppleCare+
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      MacOS Sonoma
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      Apple이 만든 앱
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      연속성
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      iCloud+
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      Mac과 비즈니스
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      교육
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </HeaderNavLi>
          <HeaderNavLi>
            <label className="submenu_title">
              <span>iPad</span>
            </label>
            <div className="nav_li_submenu">
              <div className="submenu">
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li" style={head}>
                      iPad 살펴보기
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      iPad 모두 살펴보기
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      iPad Pro
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      iPad Air
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      iPad
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      iPad Mini
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      Apple Pencil
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      키보드
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      iPad 비교하기
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      iPad를 선택하는 이유
                    </li>
                  </ul>
                </span>
                <span className="submenu_sec_small">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li" style={head}>
                      iPad 쇼핑하기
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      iPad 쇼핑하기
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      iPad 액세서리
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      Apple Trade In
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      할부 방식
                    </li>
                  </ul>
                </span>
                <span className="submenu_sec_small">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li" style={head}>
                      그 외에 iPad 관련항목
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      iPad 지원
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      iPad를 위한 AppleCare+
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      iPadOS 17
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      Apple이 만든 앱
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      iCloud+
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      교육
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </HeaderNavLi>
          <HeaderNavLi>
            <label className="submenu_title">
              <span>iPhone</span>
            </label>
            <div className="nav_li_submenu">
              <div className="submenu">
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li" style={head}>
                      iPhone 살펴보기
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      iPhone 모두 살펴보기
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      iPhone 15 Pro
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      iPhone 15
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      iPhone 14
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      iPhone 13
                    </li>
                    <li className="submenu_sec_li" style={large}>
                      iPhone SE
                    </li>
                    <li
                      className="submenu_sec_li"
                      style={(small, { marginTop: "12px" })}
                    >
                      iPhone 비교하기
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      안드로이드에서 갈아타기
                    </li>
                  </ul>
                </span>
                <span className="submenu_sec_small">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li" style={head}>
                      iPhone 쇼핑하기
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      iPhone 쇼핑하기
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      iPhone 액세서리
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      Apple Trade In
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      할부 방식
                    </li>
                  </ul>
                </span>
                <span className="submenu_sec_small">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li" style={head}>
                      그 외에 iPhone 관련 항목
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      iPhone을 위한 AppleCare+
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      iOS 17
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      Apple이 만든 앱
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      iPhone의 개인정보 보호
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      iCloud+
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      Apple 지갑, Apple Pay
                    </li>
                    <li className="submenu_sec_li" style={small}>
                      Siri
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </HeaderNavLi>
          <HeaderNavLi>
            <label className="submenu_title">
              <span>Watch</span>
            </label>
            <div className="nav_li_submenu">
              <div className="submenu">
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                  </ul>
                </span>
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                  </ul>
                </span>
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                  </ul>
                </span>
              </div>
            </div>
          </HeaderNavLi>
          <HeaderNavLi>
            <label className="submenu_title">
              <span>AirPods</span>
            </label>
            <div className="nav_li_submenu">
              <div className="submenu">
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                  </ul>
                </span>
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                  </ul>
                </span>
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                  </ul>
                </span>
              </div>
            </div>
          </HeaderNavLi>
          <HeaderNavLi>
            <label className="submenu_title">
              <span>TV 및 홈</span>
            </label>
            <div className="nav_li_submenu">
              <div className="submenu">
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                  </ul>
                </span>
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                  </ul>
                </span>
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                  </ul>
                </span>
              </div>
            </div>
          </HeaderNavLi>
          <HeaderNavLi>
            <label className="submenu_title">
              <span>엔터테인먼트</span>
            </label>
            <div className="nav_li_submenu">
              <div className="submenu">
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                  </ul>
                </span>
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                  </ul>
                </span>
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                  </ul>
                </span>
              </div>
            </div>
          </HeaderNavLi>
          <HeaderNavLi>
            <label className="submenu_title">
              <span>액세서리</span>
            </label>
            <div className="nav_li_submenu">
              <div className="submenu">
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                  </ul>
                </span>
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                  </ul>
                </span>
                <span className="submenu_sec">
                  <ul className="submenu_sec_ul">
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                    <li className="submenu_sec_li">안녕안녕</li>
                  </ul>
                </span>
              </div>
            </div>
          </HeaderNavLi>
          <HeaderNavLi>
            <label className="submenu_title">
              <SearchIcon style={{ transform: "scale(1.1,1.1)" }} />
            </label>
          </HeaderNavLi>
          <HeaderNavLi>
            <label className="submenu_title">
              <WorkOutlineIcon />
            </label>
          </HeaderNavLi>
        </HeaderNavUlContainer>
      </HeaderNavContainer>
    </HeaderWrapper>
  );
}
