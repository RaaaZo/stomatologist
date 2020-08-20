import React, { useContext } from "react";
import HomeAnimation from "components/HomePage/HomeAnimation";
import { PageTitle } from "components/shared/PageTitle/PageTitle";
import HomeText from "components/HomePage/HomeText";
import { PageWrapper } from "components/shared/PageWrapper/PageWrapper";
import { ContentWrapper } from "components/shared/ContentWrapper/ContentWrapper";
import { StyledButtons } from "components/ServicesPage/ServicesButtons";

const Home = () => {
  return (
    <PageWrapper>
      <PageTitle>VITA-DENT Witold Kozanecki</PageTitle>
      <ContentWrapper>
        <HomeText>
          W oparciu o swoje wieloletnie doświadczenie zawodowe stworzyłem
          gabinet przyjazny wszystkim Pacjentom. Pragnę, by na każdym etapie
          leczenia zapewnić swoim Pacjentom solidną i profesjonalną opiekę, jak
          i miłą atmosferę. Oferuję również przyjęcia w godzinach wieczornych,
          by każdy Pacjent miał możliwość umówienia wizyty w dogodnym dla siebie
          czasie.
        </HomeText>
        <HomeAnimation />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Home;
