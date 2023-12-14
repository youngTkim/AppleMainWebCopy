import styled from "styled-components";

const CardSContainer = styled.section`
  display: block;
  position: relative;
  height: 20vh;
  width: 100%;
  margin-bottom: 64px;
`;
const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  width: auto;
  height: 100%;
  padding: 0 90px;
  ::-webkit-scrollbar {
    width: 3px; /* 스크롤바의 폭을 조절합니다. */
  }
`;

const CarouselCard = styled.span`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  width: auto;
  height: 100%;
  aspect-ratio: 1.2 / 1;
`;
const CardImage = styled.span`
  margin: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  max-height: 70%;
  img {
    width: auto;
    height: 100%;
  }
`;
const CardLine = styled.span`
  text-align: center;
  color: #1d1d1f;
  font-weight: normal;
  margin: 3px;
  width: auto;
  height: 30%;
`;

export default function CardSCarousel() {
  return (
    <CardSContainer>
      <CarouselContainer>
        <CarouselCard>
          <CardImage>
            <img
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1696964122666"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1696964122666, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1696964122666 2x"
              data-selected="true"
              data-label-id="0"
              data-metatip="true"
            />
          </CardImage>
          <CardLine>Mac</CardLine>
        </CarouselCard>
        <CarouselCard>
          <CardImage>
            <img
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-nav-202309?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1692971740452"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-nav-202309?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1692971740452, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-nav-202309?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1692971740452 2x"
            />
          </CardImage>
          <CardLine>iPhone</CardLine>
        </CarouselCard>
        <CarouselCard>
          <CardImage>
            <img
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1664912135437"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1664912135437, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1664912135437 2x"
            />
          </CardImage>
          <CardLine>iPad</CardLine>
        </CarouselCard>
        <CarouselCard>
          <CardImage>
            <img
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_KR?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1693703814022"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_KR?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1693703814022, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_KR?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1693703814022 2x"
            />
          </CardImage>
          <CardLine>Apple Watch</CardLine>
        </CarouselCard>
        <CarouselCard>
          <CardImage>
            <img
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1660676485885"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1660676485885, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1660676485885 2x"
            />
          </CardImage>
          <CardLine>AirPods</CardLine>
        </CarouselCard>
        <CarouselCard>
          <CardImage>
            <img
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1625783380000"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1625783380000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1625783380000 2x"
            />
          </CardImage>
          <CardLine>AirTag</CardLine>
        </CarouselCard>
        <CarouselCard>
          <CardImage>
            <img
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1664628458484"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1664628458484, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1664628458484 2x"
            />
          </CardImage>
          <CardLine>Apple TV 4K</CardLine>
        </CarouselCard>
        <CarouselCard>
          <CardImage>
            <img
              alt=""
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1692803114952"
              srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1692803114952, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1692803114952 2x"
            />
          </CardImage>
          <CardLine>액세서리</CardLine>
        </CarouselCard>
      </CarouselContainer>
    </CardSContainer>
  );
}
