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
  margin: 8px 10px 68px 10px;
  font-size: 18px;
  font-weight: bold;
  color: #6e6e73;
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

export default function CardLCarousel2() {
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
              무료각인을 더해 훈훈한 선물.
            </CardLLabel>
            <img
              width="400"
              height="500"
              alt="짧은 스템, 실리콘 이어 팁이 있고 스피커 구멍이 노출된 화이트 AirPods Pro(2세대), 그리고 앞면에 평화를 나타내는 브이 모양 손가락 이모티콘이 각인된 충전 케이스를 종이로 꾸민 파형 무늬가 둘러싸고 있는 모습"
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-holiday-engraving-202311?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863027293"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-holiday-engraving-202311?wid=400&amp;hei=500&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863027293, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-holiday-engraving-202311?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696863027293 2x"
              class="rf-ccard-img-full"
            />
          </HeadCardLContainer>
          <CardLSContainer>
            <ImageContainer>
              <img
                width="200"
                height="200"
                alt="오른쪽 및 왼쪽 이어버드 상단에 노이즈 캔슬링 마이크가 보이고 이어버드 끝에는 실리콘 팁이 달린 AirPods Pro의 안쪽과 MagSafe 충전 케이스의 모습. 덮개와 본체를 연결한 은색 힌지가 보이는 MagSafe 충전 케이스의 윗면 모습."
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTJV3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1694014871985"
                srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTJV3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1694014871985, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTJV3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1694014871985 2x"
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
                무료각인
              </span>
              <span
                style={{
                  whiteSpace: "normal",
                  color: "#1d1d1f",
                  fontSize: "17px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >{`AirPods Pro MagSafe 충전 케이스 모델(2세대, USB-C)`}</span>
              <span
                style={{
                  color: "#1d1d1f",
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >{`₩359,000`}</span>
            </ExplanationContainer>
          </CardLSContainer>
          <CardLSContainer>
            <ImageContainer>
              <img
                width="200"
                height="200"
                alt=""
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airtag-single-select-202104?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1617761671000"
                srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airtag-single-select-202104?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1617761671000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airtag-single-select-202104?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1617761671000 2x"
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
                무료각인
              </span>
              <span
                style={{
                  whiteSpace: "normal",
                  color: "#1d1d1f",
                  fontSize: "17px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >{`AirTag`}</span>
              <span
                style={{
                  color: "#1d1d1f",
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >{`₩45,000`}</span>
            </ExplanationContainer>
          </CardLSContainer>
          <CardLSContainer>
            <ImageContainer>
              <img
                width="200"
                height="200"
                alt="열려 있는 완충된 충전 케이스와 그 위에 있는 AirPods(3세대)를 앞에서 바라본 모습. "
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1632861342000"
                srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1632861342000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1632861342000 2x"
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
                무료각인
              </span>
              <span
                style={{
                  whiteSpace: "normal",
                  color: "#1d1d1f",
                  fontSize: "17px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >{`AirPods(3세대) Lightning 충전 케이스 모델`}</span>
              <span
                style={{
                  color: "#1d1d1f",
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >{`₩259,000`}</span>
            </ExplanationContainer>
          </CardLSContainer>
          <CardLSContainer>
            <ImageContainer>
              <img
                width="200"
                height="200"
                alt="평면 에지를 자석 방식으로 부착해 자동으로 충전 및 페어링이 가능한 Apple Pencil(2세대)."
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MU8F2?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1540596407165"
                srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MU8F2?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1540596407165, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MU8F2?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1540596407165 2x"
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
                무료각인
              </span>
              <span
                style={{
                  whiteSpace: "normal",
                  color: "#1d1d1f",
                  fontSize: "17px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >{`Apple Pencil(2세대)`}</span>
              <span
                style={{
                  color: "#1d1d1f",
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >{`₩195,000`}</span>
            </ExplanationContainer>
          </CardLSContainer>
          <CardLSContainer>
            <ImageContainer>
              <img
                width="200"
                height="200"
                alt="핑크 색상 AirPods Max의 앞면 모습과 그 옆의 AirPods Max 헤드폰 외관의 옆면 모습."
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-pink-202011?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1604022365000"
                srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-pink-202011?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1604022365000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-pink-202011?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1604022365000 2x"
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
                무료각인
              </span>
              <span
                style={{
                  whiteSpace: "normal",
                  color: "#1d1d1f",
                  fontSize: "17px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >{`AirPods Max - 핑크`}</span>
              <span
                style={{
                  color: "#1d1d1f",
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >{`₩769,000`}</span>
            </ExplanationContainer>
          </CardLSContainer>
        </CarouselContainer>
      </CardLCarouselContainer>
    </>
  );
}
