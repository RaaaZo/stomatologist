import React from "react";
import HomeAnimation from "components/HomePage/HomeAnimation";
import PageTitle from "components/HomePage/PageTitle";
import HomeText from "components/HomePage/HomeText";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (min-width: 1024px) {
    overflow: hidden;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 660px) and (orientation: landscape) {
    margin-top: 40px;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    margin-top: 80px;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 1440px) and (orientation: landscape) {
    margin-top: 100px;
    flex-direction: row;
    align-items: center;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <PageTitle>Nazwa gabinetu</PageTitle>
      <InnerWrapper>
        <HomeText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          delectus, eveniet molestiae nobis est recusandae perferendis amet
          tempora provident perspiciatis quae porro mollitia fugit autem? Ut,
          eaque consectetur itaque ipsa voluptatem provident, veniam in
          cupiditate architecto reiciendis atque veritatis illum magnam
          accusamus doloribus perspiciatis corrupti mollitia ab esse quia quas.
        </HomeText>
        <HomeAnimation />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Home;
