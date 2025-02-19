import React from "react"
import styled from "styled-components"

const RegionWrapper = styled.div`
  margin-bottom: 20px;
`

const RegionHeader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
  font-weight: 300;
`

const RegionList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  list-style: none;
  padding: 0;
`

const RegionListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const FlagImage = styled.img`
  margin-right: 10px;
  width: 16px;
  height: 12px;
`

const CountryLink = styled.a`
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

interface RegionProps {
  title: string
  countries: { name: string; iso: string; url: string }[]
}

const Region: React.FC<RegionProps> = ({ title, countries }) => {
  return (
    <RegionWrapper>
      <RegionHeader>{title}</RegionHeader>
      <RegionList>
        {countries.map((country, index) => (
          <RegionListItem key={index}>
            <FlagImage
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.iso.toLowerCase()}.png`}
              alt={`${country.name} Flag`}
            />
            <CountryLink href={`/data-explorer/${country.url}`}>
              {country.name}
            </CountryLink>
          </RegionListItem>
        ))}
      </RegionList>
    </RegionWrapper>
  )
}

export default Region
