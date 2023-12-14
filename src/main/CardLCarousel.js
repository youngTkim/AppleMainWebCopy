import React from "react";
import styled from "styled-components";

const CardLCarouselTitleContainer = styled.div`
  display: flex;
  font-family: "SF-Pro-Text", sans-serif;
  width: 100%;
  height: 20vh;
`;
const CardLCarouselTitle = styled.article`
  display: flex;
  margin-left: 100px;
  color: #6e6e73;
  font-size: 30px;
  font-family: "SF-Pro-Text", sans-serif;
  font-weight: bold;
  align-items: center;
  padding: 8px;
`;

const CardLCarouselContainer = styled.section`
  display: block;
  font-family: "SF-Pro-Text", sans-serif;
  overflow-x: scroll;

  position: relative;
  width: 100%;
  height: 80vh;
`;
const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  min-width: 300vw;
  height: 100%;
  padding: 0 90px;
`;
const CardLContainer = styled.span`
  display: block;
  position: relative;
  align-items: center;
  overflow: hidden;
  margin: 8px 10px 68px 10px;
  max-width: 480px;
  border-radius: 8px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.15s ease 0s;
  &:hover {
    transform: scale(1.03, 1.03);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.3);
  }
  img {
    object-fit: cover;
  }
  .tag {
    color: #6e6e73;
    font-size: 12px;
    font-weight: bold;
  }
  .name {
    color: #1d1d1f;
    font-size: 28px;
    font-weight: bold;
  }
  .prize {
    color: #1d1d1f;
    font-size: 17px;
    font-weight: normal;
  }
`;

const CardLLabel = styled.label`
  display: inline;
  position: absolute;
  top: 10%;
  left: 10%;
`;

export default function CardLCarousel() {
  return (
    <>
      <CardLCarouselTitleContainer>
        <CardLCarouselTitle>
          <span style={{ color: "#e30000" }}>최신 제품.</span>
          <span>주고싶은 특별한 누군가를 위한 선물.</span>
        </CardLCarouselTitle>
      </CardLCarouselTitleContainer>
      <CardLCarouselContainer>
        <CarouselContainer>
          <CardLContainer>
            <CardLLabel className="tag">New</CardLLabel>
            <CardLLabel className="name" style={{ top: "20%" }}>
              iPhone 15 Pro
            </CardLLabel>
            <CardLLabel className="prize" style={{ top: "30%" }}>
              ₩1,555,000부터
            </CardLLabel>
            <img
              alt="프로급 카메라 시스템을 보여주는 티타늄 iPhone 15 Pro 주변에 종이로 꾸민 행성들이 있는 모습"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030449 2x"
              class="rf-ccard-img-full"
            />
          </CardLContainer>
          <CardLContainer>
            <CardLLabel className="tag">New</CardLLabel>
            <CardLLabel className="name" style={{ top: "20%" }}>
              Apple Watch Series 9
            </CardLLabel>
            <CardLLabel className="prize" style={{ top: "30%" }}>
              ₩599,000부터
            </CardLLabel>
            <img
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311_GEO_KR?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055183686"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311_GEO_KR?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055183686, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-s9-202311_GEO_KR?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697055183686 2x"
              class="rf-ccard-img-full"
            />
          </CardLContainer>
          <CardLContainer>
            <CardLLabel className="tag">New</CardLLabel>
            <CardLLabel className="name" style={{ top: "20%" }}>
              MacBook Pro
            </CardLLabel>
            <CardLLabel className="prize" style={{ top: "30%" }}>
              ₩2,390,000부터 **
            </CardLLabel>
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696872235281"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696872235281, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696872235281 2x"
              class="rf-ccard-img-full"
            />
          </CardLContainer>
          <CardLContainer>
            <CardLLabel className="tag">New</CardLLabel>
            <CardLLabel className="name" style={{ top: "20%" }}>
              iPhone 15
            </CardLLabel>
            <CardLLabel className="prize" style={{ top: "30%" }}>
              ₩1,250,000부터
            </CardLLabel>
            <img
              width="480"
              height="500"
              alt="첨단 듀얼 카메라 시스템을 보여주는 핑크 iPhone 15이 종이로 꾸민 구름 위에 떠 있는 모습"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698188084112"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698188084112, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-iphone-15-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698188084112 2x"
            />
          </CardLContainer>
          <CardLContainer>
            <CardLLabel className="tag">New</CardLLabel>
            <CardLLabel className="name" style={{ top: "20%" }}>
              Apple Watch Ultra 2
            </CardLLabel>
            <CardLLabel className="prize" style={{ top: "30%" }}>
              ₩1,149,000부터
            </CardLLabel>
            <img
              width="480"
              height="500"
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-ultra-2-202311_GEO_KR?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698766693786"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-ultra-2-202311_GEO_KR?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698766693786, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-ultra-2-202311_GEO_KR?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1698766693786 2x"
              class="rf-ccard-img-full"
            />
          </CardLContainer>
          <CardLContainer>
            {/* <CardLLabel className="tag">New</CardLLabel> */}
            <CardLLabel className="name" style={{ top: "20%" }}>
              iPad Air
            </CardLLabel>
            <CardLLabel className="prize" style={{ top: "30%" }}>
              ₩929,000부터
            </CardLLabel>
            <img
              width="480"
              height="500"
              alt="Liquid Retina 디스플레이, 12MP 와이드 카메라를 갖춘 퍼플 iPad Air의 뒷면과 앞면 주변을 종이로 꾸민 구름이 둘러싸고 있는 모습"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-air-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032946"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-air-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032946, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-air-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032946 2x"
              class="rf-ccard-img-full"
            />
          </CardLContainer>
          <CardLContainer>
            {/* <CardLLabel className="tag">New</CardLLabel> */}
            <CardLLabel className="name" style={{ top: "20%" }}>
              iPad
            </CardLLabel>
            <CardLLabel className="prize" style={{ top: "30%" }}>
              ₩679,000부터
            </CardLLabel>
            <img
              width="480"
              height="500"
              alt="전면 화면 디자인의 핑크 iPad의 앞면과 12MP 와이드 카메라를 보여주는 블루 iPad의 뒷면을 종이로 꾸민 파형 무늬가 둘러싸고 있는 모습"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030352"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030352, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-ipad-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863030352 2x"
              class="rf-ccard-img-full"
            />
          </CardLContainer>
          <CardLContainer>
            {/* <CardLLabel className="tag">New</CardLLabel> */}
            <CardLLabel className="name" style={{ top: "20%" }}>
              MacBook Air
            </CardLLabel>
            <CardLLabel className="prize" style={{ top: "30%" }}>
              ₩1,890,000부터
            </CardLLabel>
            <img
              width="480"
              height="500"
              alt="회색 종이 구름과 날고 있는 새에 둘러싸인 놀랍도록 얇은 MacBook Air의 열린 상태 옆모습."
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-air-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032996"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-air-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032996, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-macbook-air-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032996 2x"
              class="rf-ccard-img-full"
            />
          </CardLContainer>
          <CardLContainer>
            {/* <CardLLabel className="tag">New</CardLLabel> */}
            <CardLLabel className="name" style={{ top: "20%" }}>
              Apple Watch SE
            </CardLLabel>
            <CardLLabel className="prize" style={{ top: "30%" }}>
              ₩329,000부터
            </CardLLabel>
            <img
              width="480"
              height="500"
              alt="스타라이트 알루미늄 Apple Watch SE와 오렌지 소르베 솔루 루프 조합 주변을 종이로 꾸민 피트니스 링이 둘러싸고 있는 모습"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-se-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032977"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-se-202311?wid=480&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032977, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-holiday-watch-se-202311?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863032977 2x"
            />
          </CardLContainer>
        </CarouselContainer>
      </CardLCarouselContainer>
    </>
  );
}
