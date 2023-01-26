import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Header, Home } from "./components"
import { Destination, Crew, Technology} from "./pages"

export default function App() 
{
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/destination">
          <Destination />
        </Route>
        <Route path="/crew">
          <Crew />
        </Route>
        <Route path="/technology">
          <Technology /> 
        </Route>
      </Switch> 
    </Router>
  )
}

