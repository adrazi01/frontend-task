import React from "react"
import styled from "styled-components"
import navbarLogo from "../../assets/images/Geopostcodes-logo-header.svg"

const NavbarContainer = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #003366;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  position: fixed;
  padding-left: 2rem;
  padding-right: 2rem;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
`

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 30px;
  }
`

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  li {
    margin: 0 1rem;
  }

  a {
    font-family: "Lexend", sans-serif;
    font-weight: 300;
    font-size: 20px;
    text-decoration: none;
    color: #ffffff;
    font-size: 1.1rem;

    &:hover {
      text-decoration: underline;
      text-decoration-color: #00aaff;
    }
  }
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    font-weight: 400;
    font-size: 15px;
    color: #ffffff;
  }
`

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>
        <img src={navbarLogo} alt="GeoPostcodes Logo" />
      </Logo>
      <NavMenu>
        <li>
          <a href="/data-explorer">Data Explorer</a>
        </li>
        <li>
          <a href="/map-explorer">Map Explorer</a>
        </li>
        <li>
          <a href="/download-center">Download Center</a>
        </li>
        <li>
          <a href="/knowledge-base">Knowledge Base</a>
        </li>
      </NavMenu>
      <UserInfo>
        <span>ante.drazic@notreallymymail.com</span>
        <span>
          <strong>GeoPostcodes</strong>
        </span>
      </UserInfo>
    </NavbarContainer>
  )
}

export default Navbar
