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
  min-width: 130vw;
  height: 100%;
  padding: 0 90px;
`;
const HeadCardLContainer = styled.span`
  display: block;
  position: relative;
  align-items: center;
  overflow: hidden;
  font-size: 18px;
  font-weight: bold;
  color: #6e6e73;
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
`;
const CardLLabel = styled.label`
  display: inline;
  position: absolute;
  top: 10%;
  left: 10%;
`;
const CardLSContainer = styled.span`
  display: block;
  position: relative;
  align-items: center;
  background-color: white;
  overflow: hidden;
  width: 300px;
  margin: 8px 10px 68px 10px;
  border-radius: 8px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.15s ease 0s;
  &:hover {
    transform: scale(1.03, 1.03);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.3);
  }
`;
const ImageContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 100%;
`;
const ExplanationContainer = styled.div`
  display: flex;
  padding: 30px 40px;
  flex-direction: column;
  height: 40%;
`;

export default function CardLCarousel3() {
  return (
    <>
      <CardLCarouselTitleContainer>
        <CardLCarouselTitle>
          <span style={{ color: "#e30000" }}>맞춤 각인.</span>
          <span>애틋함을 아로새기다.</span>
        </CardLCarouselTitle>
      </CardLCarouselTitleContainer>
      <CardLCarouselContainer>
        <CarouselContainer>
          <HeadCardLContainer>
            <CardLLabel className="name" style={{ top: "10%" }}>
              연말연시 쇼핑의 마무리는 액세서리로.
            </CardLLabel>
            <img
              width="400"
              height="500"
              alt="종이로 꾸민 언덕 사이로 에버그린 색상의 MagSafe형 iPhone 15 Pro 파인우븐 케이스, 스타라이트 알루미늄 Apple Watch Series 9, 오렌지 소르베 솔로 루프, 멀베리 AirTag 파인우븐 키 링이 표시된 모습"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-holiday-quick-picks-202311?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863027393"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-holiday-quick-picks-202311?wid=400&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863027393, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-holiday-quick-picks-202311?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863027393 2x"
              class="rf-ccard-img-full"
            />
          </HeadCardLContainer>
          <CardLSContainer>
            <ImageContainer>
              <img
                width="200"
                height="200"
                alt="캡에 Apple Pencil이라는 각인이 새겨진 화이트 색상의 Apple Pencil(USB-C). Apple 로고로 Apple이라는 단어를 표현하고 있습니다"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUWA3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1695933856697"
                srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUWA3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1695933856697, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUWA3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1695933856697 2x"
              />
            </ImageContainer>
            <ExplanationContainer>
              <span
                style={{
                  color: "#bf4800",
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >
                New
              </span>
              <span
                style={{
                  whiteSpace: "normal",
                  color: "#1d1d1f",
                  fontSize: "17px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >{`Apple Pencil(USB-C)`}</span>
              <span
                style={{
                  color: "#1d1d1f",
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >{`₩119,000`}</span>
            </ExplanationContainer>
          </CardLSContainer>
          <CardLSContainer>
            <ImageContainer>
              <img
                width="200"
                height="200"
                alt="Apple 로고가 중앙에 새겨져 있는 사이프러스 색상의 MagSafe형 iPhone 15 실리콘 케이스를 블루 마감의 iPhone 15에 부착한 모습. 카메라 부분의 구멍을 통해 iPhone의 색상이 보입니다."
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0X3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1699565518527"
                srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0X3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1699565518527, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT0X3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1699565518527 2x"
              />
            </ImageContainer>
            <ExplanationContainer>
              <span
                style={{
                  color: "#bf4800",
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >
                New
              </span>
              <span
                style={{
                  whiteSpace: "normal",
                  color: "#1d1d1f",
                  fontSize: "17px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >{`MagSafe형 iPhone 15 실리콘 케이스 - 사이프러스`}</span>
              <span
                style={{
                  color: "#1d1d1f",
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >{`₩69,000`}</span>
            </ExplanationContainer>
          </CardLSContainer>
          <CardLSContainer>
            <ImageContainer>
              <img
                width="200"
                height="200"
                alt="Nanoleaf Shapes Hexagons Starter Kit는 원하는 방식대로 배열하고 컬러를 제어할 수 있는 체리 블라섬 패널 9개로 구성되어 있습니다."
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HQWG2?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1678138382569"
                srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HQWG2?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1678138382569, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HQWG2?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1678138382569 2x"
              />
            </ImageContainer>
            <ExplanationContainer>
              <span
                style={{
                  color: "#bf4800",
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >
                스마트 홈 액세서리
              </span>
              <span
                style={{
                  whiteSpace: "normal",
                  color: "#1d1d1f",
                  fontSize: "17px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >{`Nanoleaf Shapes Cherry Blossom Hexagon Starter Kit`}</span>
              <span
                style={{
                  color: "#1d1d1f",
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >{`₩300,000`}</span>
            </ExplanationContainer>
          </CardLSContainer>
          <CardLSContainer>
            <ImageContainer>
              <img
                width="200"
                height="200"
                alt="멀베리 색상의 AirTag 파인우븐 키링을 뒤에서 바라본 모습. 키링이 AirTag의 바깥쪽 테두리를 완전히 감싸고 있습니다."
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2J3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1699644793814"
                srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2J3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1699644793814, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT2J3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1699644793814 2x"
              />
            </ImageContainer>
            <ExplanationContainer>
              <span
                style={{
                  color: "#bf4800",
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >
                New
              </span>
              <span
                style={{
                  whiteSpace: "normal",
                  color: "#1d1d1f",
                  fontSize: "17px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >{`AirTag 파인우븐 키링 - 멀베리`}</span>
              <span
                style={{
                  color: "#1d1d1f",
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >{`₩58,000`}</span>
            </ExplanationContainer>
          </CardLSContainer>
          <CardLSContainer>
            <ImageContainer>
              <img
                width="200"
                height="200"
                alt="부드러운 실리콘 고무 소재에 버클이나 잠금장치가 없는 오렌지 소르베 솔로 루프 밴드"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTG73ref?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692936895305"
                srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTG73ref?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1692936895305, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTG73ref?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692936895305 2x"
              />
            </ImageContainer>
            <ExplanationContainer>
              <span
                style={{
                  color: "#bf4800",
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >
                New
              </span>
              <span
                style={{
                  whiteSpace: "normal",
                  color: "#1d1d1f",
                  fontSize: "17px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >{`45mm 오렌지 소르베 솔로 루프 - 사이즈 6`}</span>
              <span
                style={{
                  color: "#1d1d1f",
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >{`₩65,000`}</span>
            </ExplanationContainer>
          </CardLSContainer>
        </CarouselContainer>
      </CardLCarouselContainer>
    </>
  );
}
