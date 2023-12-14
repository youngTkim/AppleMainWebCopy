import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const GalleryContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 16vh;
  width: 100%;
`;

const GalleryScroller = styled.div`
  display: flex;
  background-color: white;
  width: 300%;
  height: 100%;
  transition: transform 0.75s ease-in-out;
  transform: translateX(${(props) => props.translateX}vw);
`;

const GalleryItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
const GalleryItemLine = styled.div`
  font-size: 14px;
  color: #1d1d1f;
`;
const BlueLine = styled.span`
  display: flex;
  align-items: center;
  color: #0066cc;
  svg {
    transform: translateY(4px);
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const WhiteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
      console.log(currentIndex);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      console.log(currentIndex);
    }
  };

  return (
    <GalleryContainer>
      <GalleryScroller translateX={currentIndex * -100}>
        <GalleryItem>
          <GalleryItemLine>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{ marginRight: "6px" }}
              >{`신용카드 결제 시 최대 12개월 할부 적용 가능.`}</span>
              <BlueLine style={{ color: "#0066cc" }}>{`더 알아보기 `}</BlueLine>
              <ArrowForwardIosIcon
                fontSize="14px"
                style={{ color: "#0066cc" }}
              />
            </div>
          </GalleryItemLine>
        </GalleryItem>
        <GalleryItem>
          <GalleryItemLine>
            <div>
              iPhone 11 이상의 모델을 보상 판매하면 iPhone 15 또는 iPhone 15 Pro
              구입 시 사용할 수 있는 ₩250,000–₩1,060,000 상당의 크레딧이.
            </div>
          </GalleryItemLine>
          <GalleryItemLine>
            <div style={{ display: "flex", alignItems: "center" }}>
              <BlueLine>{`iPhone 쇼핑하기`}</BlueLine>
              <ArrowForwardIosIcon
                fontSize="8px"
                style={{ color: "#0066cc" }}
              />
            </div>
          </GalleryItemLine>
        </GalleryItem>
        <GalleryItem>
          <GalleryItemLine>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "4px" }}>
                쇼핑 지원이 필요하다면?
              </span>
              <BlueLine>스폐셜리스트에게 문의하세요.</BlueLine>
              <ArrowForwardIosIcon
                fontSize="8px"
                style={{ color: "#0066cc" }}
              />
            </div>
          </GalleryItemLine>
        </GalleryItem>
      </GalleryScroller>
      <Button onClick={handlePrev}>
        <ArrowBackIosIcon />
      </Button>
      <Button style={{ right: 0 }} onClick={handleNext}>
        <ArrowForwardIosIcon />
      </Button>
    </GalleryContainer>
  );
};

export default WhiteCarousel;
