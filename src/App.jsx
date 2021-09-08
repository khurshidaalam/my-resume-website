import React from "react";
import { BrowserRouter, Redirect, Route, Switch, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import Service from "./components/Service/Service";
import Projects from "./components/Projects/Projects";
import Achivements from "./components/Achivements/Achivements";
import Resume from "./components/Resume/Resume";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { AnimatePresence } from "framer-motion";


const App = () => {
    const location = useLocation();
    
    return (
    <>
    <Menu/>
    

    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        {//if props need to use then use render \/ other just use component //
        }
        <Route exact path="/" component={About}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Route exact path="/resume" component={Resume}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/achivements" component={Achivements}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Redirect to="/"/>
        <Route component={Error}></Route>
        
        
    </Switch>
    </AnimatePresence>
     
    {/*<About/>
    <Contact/> */}
    </>
    );
}

export default App;