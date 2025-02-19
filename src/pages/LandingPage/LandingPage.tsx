import React from "react"
import Card from "../../components/Card/Card"
import globeBackground from "../../assets/images/main_background.webp"
import dataIcon from "../../assets/images/data_explorer.svg"
import mapIcon from "../../assets/images/map_explorer.webp"
import downloadIcon from "../../assets/images/dowload_center.svg"
import knowledgeIcon from "../../assets/images/kb.svg"
import styled from "styled-components"

const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  overflow: auto;
`

const Spacer = styled.div`
  height: 100px;
`

const Title = styled.div`
  font-family: "Lexend", sans-serif;
  text-align: center;
  font-weight: 600;
  font-size: 3vh;
  color: #003366;

  @media (max-width: 768px) {
    font-size: 6vw;
  }

  @media (max-width: 480px) {
    font-size: 8vw;
  }
`

const CardLayoutWrapper = styled.div`
  padding-top: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 55vw;
  box-sizing: border-box;
  width: 100%;
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    max-width: 50vw;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    max-width: 40vw;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    max-width: 30vw;
  }
`

const GlobeContainer = styled.div`
  width: 100%;
  max-width: 80vw;
  flex-grow: 1;
  background-image: url(${globeBackground});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  overflow: hidden;
  min-height: 100px;
`

const LandingPage: React.FC = () => {
  return (
    <LandingPageWrapper>
      <Spacer />
      <Title>Welcome to GeoPostcodes' Customer Portal</Title>
      {/* <Spacer /> */}
      <CardLayoutWrapper>
        <Card image={dataIcon} title="Data Explorer" />
        <Card image={mapIcon} title="Map Explorer" />
        <Card
          image={downloadIcon}
          centerBackground={true}
          title="Download Center"
        />
        <Card
          image={knowledgeIcon}
          centerBackground={true}
          title="Knowledge Base"
        />
      </CardLayoutWrapper>
      <GlobeContainer />
    </LandingPageWrapper>
  )
}

export default LandingPage
