import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

interface CardProps {
  image: string
  title: string
  centerBackground?: boolean
}

interface ICardWrapper {
  backgroundImage: string
  backgroundImageCenter?: boolean
}

const CardWrapper = styled.div<ICardWrapper>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: ${({ backgroundImageCenter }) =>
    backgroundImageCenter ? "8vw" : "25vw"};
  background-repeat: no-repeat;
  background-color: #d6e4f0;
  background-position: ${({ backgroundImageCenter }) =>
    backgroundImageCenter
      ? "calc(100% - 2vw) center"
      : "calc(100% + 6vw) calc(100% + 4vw)"};
  position: relative;
  border-radius: 20px;
  width: 100%;
  height: 20vh;
  min-height: 150px;
  min-width: 200px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 40vw;
    height: 25vh;
    background-size: ${({ backgroundImageCenter }) =>
      backgroundImageCenter ? "12vw" : "30vw"};
  }

  @media (max-width: 480px) {
    width: 80vw;
    height: 30vh;
    background-size: ${({ backgroundImageCenter }) =>
      backgroundImageCenter ? "20vw" : "50vw"};
  }
`

const CardTitleWrapper = styled.div`
  font-family: "Lexend", sans-serif;
  font-weight: 600;
  font-size: 1.4vw;
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding-top: 0.5rem;
  border-radius: 5px;
  color: #003366;

  @media (max-width: 768px) {
    font-size: 2vw;
  }

  @media (max-width: 480px) {
    font-size: 5vw;
  }
`
const generateLinkFromTitle = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, "-")
}

const Card: React.FC<CardProps> = ({ image, title, centerBackground }) => {
  const link = generateLinkFromTitle(title)

  return (
    <Link to={`/${link}`} style={{ textDecoration: "none" }}>
      <CardWrapper
        backgroundImage={image}
        backgroundImageCenter={centerBackground}
      >
        <CardTitleWrapper>{title}</CardTitleWrapper>
      </CardWrapper>
    </Link>
  )
}

export default Card
