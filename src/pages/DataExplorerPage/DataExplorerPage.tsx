import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Region from "../../components/Region/Region"

interface ICountry {
  continent: string
  iso: string
  name: string
  noPostalCode: boolean
  limited: boolean
  notAvailable: boolean
  url: string
  continentCode: number
}

const DataExplorerPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 300;
`

const LeftColumn = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  padding-top: 70px;
`

const RightColumn = styled.div`
  width: 25%;
  border-left: 1px solid #ddd;
  padding-top: 70px;
  background-color: #f7f7f7;
`

const RegionColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
`

const DatasetColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
`

const MainTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  font-family: "Lexend", sans-serif;
  padding-top: 2rem;
`

const SectionTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 15px;
  font-family: "Lexend", sans-serif;
`

const InputWrapper = styled.input`
  font-size: 1.2rem;
  padding: 10px 15px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #f0f0f0;
  margin-top: 2rem;
`

const DatasetContent = styled.div`
  border-radius: 5px;
  font-family: "Lexend", sans-serif;
  font-weight: 300;
  padding-top: 3rem;
  font-size: 18px;
`

const DatasetTitle = styled.h3`
  font-weight: 300;
  border-bottom: 2px solid #ddd;
  padding-bottom: 1rem;
`

const DatasetRow = styled.div<{ highlight?: boolean }>`
  display: flex;
  font-weight: 300;
  justify-content: space-between;
  background-color: ${({ highlight }) => (highlight ? "#f0f0f0" : "inherit")};
  padding: 5px 0;
  font-family: "Lexend", sans-serif;

  .title {
    color: #333;
  }

  .value {
    color: #666;
  }
`

const DataExplorerPage: React.FC = () => {
  const [countries, setCountries] = useState<ICountry[]>([])
  const [regions, setRegions] = useState<{ [key: string]: ICountry[] }>({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/GeoPostcodes/technical-test/main/front-end/data/countries.json"
        )

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data: ICountry[] = await response.json()

        setCountries(data)
        sortRegions(data)
      } catch (error) {
        console.error("Failed to fetch data:", error)
      }
    }

    fetchData()
  }, [])

  const sortRegions = (data: ICountry[]) => {
    const regions: { [key: string]: ICountry[] } = {}

    data.forEach((country) => {
      if (!regions[country.continent]) {
        regions[country.continent] = []
      }
      regions[country.continent].push(country)
    })

    setRegions(regions)
  }

  return (
    <DataExplorerPageWrapper>
      <LeftColumn>
        <RegionColumn>
          <MainTitle>Data Explorer</MainTitle>
          <SectionTitle>
            <strong>Index</strong> of Countries
          </SectionTitle>
          {Object.keys(regions).map((region, index) => (
            <Region
              key={index}
              title={region}
              countries={regions[region].map((country) => ({
                name: country.name,
                iso: country.iso,
                url: country.url,
              }))}
            />
          ))}
        </RegionColumn>
        <DatasetColumn>
          <InputWrapper
            type="text"
            placeholder="Search by postcode, locality or region"
          />
          <DatasetContent>
            <DatasetTitle>
              <strong>Dataset</strong> content
            </DatasetTitle>
            <DatasetRow>
              <span className="title">Countries</span>
              <span className="value">{countries.length}</span>
            </DatasetRow>
            <DatasetRow highlight>
              <span className="title">Administrative Regions</span>
              <span className="value">284 626</span>
            </DatasetRow>
            <DatasetRow>
              <span className="title">Streets</span>
              <span className="value">34 404 491</span>
            </DatasetRow>
            <DatasetRow highlight>
              <span className="title">Businesses & admin.</span>
              <span className="value">1 721 216</span>
            </DatasetRow>
          </DatasetContent>
        </DatasetColumn>
      </LeftColumn>
      <RightColumn></RightColumn>
    </DataExplorerPageWrapper>
  )
}

export default DataExplorerPage
