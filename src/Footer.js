import styled from "styled-components";

import AppleIcon from "@mui/icons-material/Apple";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  font-family: "SF-Pro-Text", sans-serif;
`;
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 100px;
`;
const Title = styled.span`
  height: 8vh;
  color: #1d1d1f;
  font-size: 28px;
  font-weight: bold;
`;
const FastLink = styled.div`
  display: flex;
  align-items: center;
  height: 8vh;
  color: #1d1d1f;
  margin-bottom: 50px;
`;
const FastLinkEl = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  min-width: 90px;
  font-size: 14px;
  font-weight: normal;
  border-radius: 15px;
  background-color: #cccccc;
  margin-right: 20px;
`;

const Anouncement = styled.section`
  display: flex;
  flex-direction: column;
  display: flex;
  color: #6e6e73;
  font-size: 12px;
  padding: 0px 40px;
  border-bottom: 1px solid #6e6e73;
`;
const AnouncementArticle = styled.article`
  margin-bottom: 12px;
  white-space: normal;
`;
const AppleTags = styled.section`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  padding-top: 20px;
  border-bottom: 1px solid #6e6e73;
`;

const TagsLabel = styled.label`
  display: flex;
  height: 5vh;
  align-items: center;
  svg {
    font-size: 15px;
    margin-right: 10px;
    color: #1d1d1f;
  }
  span {
    font-size: 15px;
    color: #1d1d1f;
  }
`;

const TagsWrapper = styled.article`
  display: flex;
  height: 60vh;
`;

const TagsUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 0;
  li {
    display: inline-block;
    font-size: 12px;
    color: #424245;
    margin-bottom: 10px;
  }
  li:hover {
    text-decoration: underline;
  }
`;
const TagsLine = styled.div`
  align-items: center;
  height: 4vh;
  color: #6e6e73;
  font-size: 12px;
`;
const Copyright = styled.section`
  margin-top: 8px;
  align-items: center;
  height: 4vh;
  color: #6e6e73;
  font-size: 12px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Title>빠른 링크</Title>
        <FastLink>
          <FastLinkEl>주문 상태</FastLinkEl>
          <FastLinkEl>쇼핑 도움말</FastLinkEl>
          <FastLinkEl>반품 </FastLinkEl>
          <FastLinkEl>관심 목록</FastLinkEl>
        </FastLink>
        <Anouncement>
          <AnouncementArticle
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span>
              {`사업자등록번호 : 120-81-84429 | 통신판매업신고번호 : 제
              2011-서울강남-00810호`}
            </span>
            <span> {`대표이사 : PETER DENWOOD | 주소 : 서울 특별시`}</span>
            <span>{`강남구 영동대로 517 대표전화 : 080-330-8877 | 팩스 : 02-6928-0000`}</span>
          </AnouncementArticle>
          <AnouncementArticle>{`⁺ 신규 가입자에게만 적용됩니다. 무료 체험 기간이 끝나면 월 8,900원에 이용할 수 있습니다. 본 프로모션은 한정된 기간 동안 신규 가입자에게만 적용되며, 신규 가입자는 적용 대상 기기를 iOS 15 또는 iPadOS 15 이후 버전이 설치된 Apple 기기에 연결해야 합니다. 무료 체험 혜택은 적용 대상 기기 페어링 이후 3개월 안에 신청할 수 있습니다. 적용 대상 기기를 이미 소유하고 있는 경우 오디오 제품을 구입하지 않아도 혜택을 받을 수 있습니다. 멤버십은 매월 자동으로 갱신되며, 해지 시 종료됩니다. 특정 제한 사항이 적용됩니다. 특정 제한 사항 및 기타 약관이 적용됩니다.`}</AnouncementArticle>
          <AnouncementArticle>{`° 신규 가입자 및 조건에 부합하는 재가입자에게만 적용됩니다. 무료 체험 기간이 끝나면 월 6,500원에 이용할 수 있습니다. 본인 또는 가족 구성원이 구입한 기기 수에 상관없이, 무료 체험 혜택은 Apple ID당 한 번 또는 본인이 ‘가족 공유’ 그룹의 구성원일 경우 그룹당 한 번만 제공됩니다. 본인 또는 가족 구성원이 이미 Apple TV+ 3개월 또는 1년 무료 체험 혜택을 이용한 경우에는 이 혜택을 이용할 수 없습니다. 무료 체험 혜택은 적용 대상 기기 활성화 이후 3개월 안에 신청할 수 있습니다. 멤버십은 매월 자동으로 갱신되며, 해지 시 종료됩니다. 특정 제한 사항 및 기타 약관이 적용됩니다.`}</AnouncementArticle>
          <AnouncementArticle>{`1. 보상 판매 프로그램은 Apple의 파트너이자 독립적으로 운영되는 제3의 업체에 의해 제공됩니다. Apple 및 Apple의 계열사는 고객과 파트너 간 계약의 당사자가 아닙니다. 보상 판매 견적은 예상 금액이며 실제 보상 판매 금액은 예상 금액보다 낮을 수 있습니다. 보상 판매 금액은 보상 판매 대상이 되는 제품의 상태, 연도, 구성에 따라 달라집니다.일부 기기는 보상 판매 대상이 아닙니다. 크레딧 또는 Apple Store Gift Card로 보상 판매를 받으려면 19세 이상이어야 합니다. 보상 판매 금액은 적용 가능한 새 기기 구입 시 적용하거나 Apple Store Gift Card로 받을 수 있습니다. 최종 확정 금액은 보상 판매 대상 기기를 수령한 후, 예상 금액 산정 시 제시한 기기의 설명과 일치하는지 비교 검수 후 정해집니다. 부가세는 새로 구입한 기기의 총액을 바탕으로 부과됩니다. 일부 매장에서는 보상 판매를 제공하지 않으며, 매장 내 보상 판매와 온라인 보상 판매 프로그램 간 내용에 차이가 있을 수 있습니다.일부 매장은 추가 요구 사항이 있을 수 있습니다. Apple의 보상 판매 파트너사는 어떤 보상 판매도 거래를 거부하거나, 보상 판매 수량을 제한할 권리를 보유합니다. 적용 가능 기기의 보상 판매 및 재활용에 대한 자세한 내용은 Apple의 보상 판매 파트너사에서 확인할 수 있습니다. 규제 및 제한이 적용될 수 있습니다.`}</AnouncementArticle>
          <AnouncementArticle>{`2. 이용 약관 위 할부 서비스는 Apple Online Store, Apple 전화 판매 및 Apple 리테일 매장에서 구입하는 경우에만 이용할 수 있습니다.
할부 서비스는 신용 카드 발급사인 신한, BC, KB, NH, 롯데, 삼성, 현대, 하나, KEB 및 시티은행에서 제공합니다. 모든 할부 구입은 신용 카드 발급사의 승인을 받아야 합니다. 신용 카드 발급사에서 할부 구입을 승인해 주지 않는 경우에도 Apple 직원에게 승인 거부 사유가 전달되지 않습니다. 할부 구입에 대한 승인 결과는 신용 카드 발급사에 문의하십시오. 할부 조건, 수수료, 청구액 등은 신용 카드 발급사에 문의하십시오. 청구액은 카드 명세서에 표시됩니다. 할부 서비스를 이용하려면 한국 거주자여야 합니다.`}</AnouncementArticle>
          <AnouncementArticle>{`할부 서비스를 이용하려면 구입 시 현지 발급 신용 카드 또는 현지 발급 제휴 카드(Visa, Mastercard, AMEX, China Union Pay)를 사용해야 합니다. 해외 신용 카드(한국 외 다른 국가 또는 지역에서 발급 받은 신용 카드), 직불/체크 카드 및 현지 발급/제휴 법인 카드는 할부 서비스를 이용할 수 없습니다. 할부는 광고 가격 또는 정찰 가격을 기준으로 합니다. 모든 주문 제품은 무료 배송됩니다.
이 정보는 2021년 03월 16일 기준 최신 정보입니다.`}</AnouncementArticle>
          <AnouncementArticle>{`3. 특별 할인가는 이용 자격을 갖춘 고객에게 적용됩니다. 특별 할인 혜택을 받는 방법에 관한 자세한 내용은 매장 내 Apple 스페셜리스트에게 문의하거나 080-330-8877에 전화로 문의하시기 바랍니다.`}</AnouncementArticle>
          <AnouncementArticle>{`보다 오래 안심할 수 있도록. 이제 AppleCare+가 우발적인 손상에 대한 수리 서비스를 횟수 제한 없이 제공합니다.`}</AnouncementArticle>
          <AnouncementArticle>{`
** 표시된 가격은 M3 칩 탑재 MacBook Pro의 가격입니다.`}</AnouncementArticle>
        </Anouncement>
        <AppleTags>
          <TagsLabel>
            <AppleIcon style={{ transform: "translateY(-1px)" }} />
            <ArrowForwardIosIcon
              style={{ fontSize: "14px", color: "#6e6e73" }}
            />
            <span>{`Apple Store 온라인`}</span>
          </TagsLabel>
          <TagsWrapper>
            <TagsUl>
              <li style={{ fontWeight: "bold" }}>쇼핑 및 알아보기</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV 및 홈</li>
              <li>AirTag</li>
              <li>액세서리</li>
              <li style={{ fontWeight: "bold", marginTop: "15px" }}>
                Apple 지갑
              </li>
              <li>지갑</li>
            </TagsUl>
            <TagsUl>
              <li style={{ fontWeight: "bold" }}>계정</li>
              <li>Apple ID 관리</li>
              <li>Apple Store 계정</li>
              <li>iCloud.com</li>
              <li style={{ fontWeight: "bold", marginTop: "15px" }}>
                엔터테인먼트
              </li>
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Podcasts</li>
              <li>Apple Books</li>
              <li>App Store</li>
            </TagsUl>
            <TagsUl>
              <li style={{ fontWeight: "bold" }}>Apple Store</li>
              <li>매장 찾기</li>
              <li>Genius Bar</li>
              <li>Today at Apple</li>
              <li>Apple 캠프</li>
              <li>Apple Store 앱</li>
              <li>인증 리퍼비쉬 제품</li>
              <li>Apple Trade In</li>
              <li>할부 방식</li>
              <li>주문 상태</li>
              <li>쇼핑 도움말</li>
            </TagsUl>
            <TagsUl>
              <li style={{ fontWeight: "bold" }}>비즈니스</li>
              <li>Apple과 비즈니스</li>
              <li>비즈니스를 위한 제품 쇼핑하기</li>
              <li style={{ fontWeight: "bold", marginTop: "15px" }}>교육</li>
              <li>Apple 그리고 교육</li>
              <li>초중고용 제품 쇼핑하기</li>
              <li>대학생활을 위한 제품 쇼핑하기</li>
            </TagsUl>
            <TagsUl>
              <li style={{ fontWeight: "bold" }}>Apple의 가치관</li>
              <li>손쉬운 사용</li>
              <li>환경</li>
              <li>개인정보 보호</li>
              <li>협력업체에 대한 책임</li>
              <li style={{ fontWeight: "bold", marginTop: "15px" }}>
                Apple 정보
              </li>
              <li>Newsroom</li>
              <li>Apple 리더십</li>
              <li>채용 안내</li>
              <li>윤리 및 규정 준수</li>
              <li>이벤트</li>
              <li>일자리 창출</li>
              <li>Apple 연락처</li>
            </TagsUl>
          </TagsWrapper>
          <TagsLine>
            <span>다양한 쇼핑 방법:</span>
            <span style={{ color: "#0066cc", textDecoration: "underline" }}>
              Apple Store를 방문
            </span>
            <span>하거나,</span>
            <span style={{ color: "#0066cc", textDecoration: "underline" }}>
              리셀러
            </span>
            <span>를 찾아보거나,</span>
            <span> 080-330-8877번으로 전화하세요.</span>
          </TagsLine>
        </AppleTags>
        <Copyright>Copyright © 2023 Apple Inc. 모든 권리 보유.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}
