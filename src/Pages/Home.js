import React from "react";
import HomeAnimation from "components/HomePage/HomeAnimation";
import { PageTitle } from "components/shared/PageTitle/PageTitle";
import HomeText from "components/HomePage/HomeText";
import { PageWrapper } from "components/shared/PageWrapper/PageWrapper";
import { ContentWrapper } from "components/shared/ContentWrapper/ContentWrapper";

const Home = () => {
  return (
    <PageWrapper>
      <PageTitle>Nazwa gabinetu</PageTitle>
      <ContentWrapper>
        <HomeText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          delectus, eveniet molestiae nobis est recusandae perferendis amet
          tempora provident perspiciatis quae porro mollitia fugit autem? Ut,
          eaque consectetur itaque ipsa voluptatem provident, veniam in
          cupiditate architecto reiciendis atque veritatis illum magnam
          accusamus doloribus perspiciatis corrupti mollitia ab esse quia quas.
        </HomeText>
        <HomeAnimation />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Home;
