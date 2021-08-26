import {Route, Redirect, Switch} from "react-router-dom"

import MainPage from "./pages/MainPage"
import AboutPage from "./pages/AboutPage"

import "./App.css"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Redirect to="main" />
        </Route>
        <Route path="/main">
          <MainPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
