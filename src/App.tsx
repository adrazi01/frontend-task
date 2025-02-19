import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import DataExplorerPage from "./pages/DataExplorerPage/DataExplorerPage"
import Navbar from "./components/Navbar/Navbar"
import "normalize.css"
import GlobalStyle from "../GlobalStyles"

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/data-explorer" component={DataExplorerPage} />
          </Switch>
        </main>
      </Router>
    </>
  )
}

export default App
