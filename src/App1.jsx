import { Route, Switch } from "react-router-dom";
import React, { createContext } from "react";
import Menu from "./Menu";
import Home from "./Home";
import Search from "./Search";
import Service from "./Service";
import About from "./About";

const App1 = () => {

    return (
        <>
            <Menu></Menu>
            <Switch>
                <Route exact path="/" component={() => <Home name="Home"></Home>}></Route>
                <Route exact path="/Search" component={() => <Search name="Search"></Search>}></Route>
                <Route exact path="/Service" component={() => <Service name="Service"></Service>}></Route>
                <Route exact path="/About" component={() => <About name="About"></About>}></Route>
            </Switch>

        </>
    )
}

export default App1;
