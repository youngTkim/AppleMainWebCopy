import styled from "styled-components";

import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

const IntroductionConatiner = styled.section`
  display: flex;
  font-family: "SF-Pro-Text", sans-serif;
  height: 60vh;
  width: 100%;
`;
const LeftIntroduction = styled.article`
  display: flex;
  padding: 40px 100px;
  justify-content: center;
  flex-direction: column;
  width: 75%;
`;
const LeftLine = styled.span`
  font-family: "SF-Pro-Text", sans-serif;
  font-size: 48px;
  font-weight: bold;
  color: #6e6e73;
  span {
    display: inline;
  }
`;

const RightIntroduction = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25%;
`;
const RightProp = styled.div`
  display: flex;
  margin: 6px 0px;
  width: 100%;
  min-height: 70px;
`;
const RightPropProfile = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
  aspect-ratio: 1 / 1;
`;
const RightPropLine = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
  justify-content: center;
  width: 100%;
  height: 100%;
  span {
    display: flex;
    align-items: center;
    padding-left: 3px;
  }
`;

export default function StoreIntroduction() {
  return (
    <IntroductionConatiner>
      <LeftIntroduction>
        <LeftLine>
          <span style={{ color: "#e30000" }}>스토어.</span>
          <span>끝내주는 선물로 선물 준비</span>
        </LeftLine>
        <LeftLine>
          <span>끝내기. 설렘의 시작</span>
        </LeftLine>
      </LeftIntroduction>
      <RightIntroduction>
        <RightProp>
          <RightPropProfile>
            <img
              width="40"
              height="40"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-chat-specialist-icon-202311_AV1?wid=70&amp;hei=70&amp;fmt=jpeg&amp;qlt=90&amp;.v=1696434169764"
            />
          </RightPropProfile>
          <RightPropLine>
            <span>쇼핑 지원이 필요하다면?</span>
            <span style={{ color: "#0066cc" }}>
              스폐셜리스트에게 문의하세요.
            </span>
          </RightPropLine>
        </RightProp>
        <RightProp>
          <RightPropProfile>
            <svg
              className="applelogo"
              width="40"
              height="55"
              viewBox="0 0 25 35"
              class="dd-glyph-svg dd-glyph-base"
              aria-hidden="true"
            >
              <path d="m0 0h25v35h-25z" fill="none"></path>
              <path d="m12.4934 4.675a10.5617 10.5617 0 0 1 4.177.8275 10.8868 10.8868 0 0 1 5.7467 5.747 10.4988 10.4988 0 0 1 .8329 4.1777 10.3219 10.3219 0 0 1 -.6421 3.5951 10.8948 10.8948 0 0 1 -1.8669 3.2062 12.8406 12.8406 0 0 1 -2.9537 2.5775c-.984.6179-1.8226 1.1843-2.4931 1.6839a9.5187 9.5187 0 0 0 -1.7742 1.6788 6.8587 6.8587 0 0 0 -1.02 1.8034 6.8213 6.8213 0 0 0 -1.0278-1.8062 9.8247 9.8247 0 0 0 -1.7708-1.6742c-.6644-.4987-1.5014-1.0658-2.485-1.6834a12.5961 12.5961 0 0 1 -2.9617-2.5777 10.99 10.99 0 0 1 -1.8636-3.2083 10.3421 10.3421 0 0 1 -.6411-3.5951 10.5153 10.5153 0 0 1 .8319-4.1772 10.9669 10.9669 0 0 1 2.3209-3.4333 10.85 10.85 0 0 1 3.4278-2.3142 10.52 10.52 0 0 1 4.1628-.8275m0-1a11.4634 11.4634 0 0 0 -4.5561.9081 11.89 11.89 0 0 0 -6.2738 6.2709 11.4566 11.4566 0 0 0 -.9135 4.5732 11.2871 11.2871 0 0 0 .703 3.9416 11.9349 11.9349 0 0 0 2.0323 3.5006 13.5349 13.5349 0 0 0 3.1956 2.7835q1.446.9079 2.42 1.6384a8.7962 8.7962 0 0 1 1.5912 1.5 5.9225 5.9225 0 0 1 .9731 1.81q.25.7236.8285.7238t.8417-.7238a5.9779 5.9779 0 0 1 .967-1.81 8.4991 8.4991 0 0 1 1.59-1.5q.98-.73 2.4268-1.6384a13.7877 13.7877 0 0 0 3.19-2.7835 11.8367 11.8367 0 0 0 2.0373-3.5006 11.263 11.263 0 0 0 .7041-3.9416 11.44 11.44 0 0 0 -.9145-4.5732 11.8867 11.8867 0 0 0 -6.2717-6.2709 11.5044 11.5044 0 0 0 -4.57-.9081zm3.8566 9.71a2.3254 2.3254 0 0 0 -1.078 1.94 2.2152 2.2152 0 0 0 1.353 2.0506 4.7326 4.7326 0 0 1 -.693 1.4443c-.429.6174-.902 1.2458-1.584 1.2458-.693 0-.858-.4079-1.661-.4079-.77 0-1.045.4189-1.672.4189-.638 0-1.078-.5733-1.584-1.29a6.3114 6.3114 0 0 1 -1.056-3.3625 2.7185 2.7185 0 0 1 2.541-3.0208c.682 0 1.232.441 1.65.441.407 0 1.023-.4631 1.782-.4631a2.3483 2.3483 0 0 1 2.002 1.0036zm-3.729-1.1135c-.055 0-.099-.0111-.143-.0111 0-.033-.011-.11-.011-.1874a2.26 2.26 0 0 1 .561-1.3781 2.19 2.19 0 0 1 1.485-.7717 1.0735 1.0735 0 0 1 .011.1984 2.3284 2.3284 0 0 1 -.528 1.4222 1.9664 1.9664 0 0 1 -1.375.7276z"></path>
            </svg>
          </RightPropProfile>
          <RightPropLine>
            <span>Apple Store를 방문하세요.</span>
            <span style={{ color: "#0066cc" }}>
              가까운 매장 찾기
              <ArrowForwardIos
                style={{ maxWidth: "12px", maxHeight: "12px" }}
              />
            </span>
          </RightPropLine>
        </RightProp>
      </RightIntroduction>
    </IntroductionConatiner>
  );
}
