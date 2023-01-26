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
        <Route path="/destination" exact>
          <Home />
        </Route>
        <Route path="/destination">
          <Destination />
        </Route>
        <Route path="/destination">
          <Crew />
        </Route>
        <Route path="/destination">
          <Technology /> 
        </Route>
      </Switch> 
    </Router>
  )
}

