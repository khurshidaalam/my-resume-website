import React from "react";
import {NavLink} from "react-router-dom";
import FilterListIcon from '@material-ui/icons/FilterList';


const Menu = () => {
    return (
        <>
        

        

        <div className="container-fluid">
            <div className="row">
                <div className="col-12 offset-1 mx-auto">
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <div class="container-fluid">
                          <a class="navbar-brand mr-auto" href="/">Khurshida alam setu</a>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <FilterListIcon/>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                              <li class="nav-item">
                              <NavLink exact activeClassName="active_class" className="navlink" to="/">About me </NavLink>
                              </li>
                              <li class="nav-item">
                              <NavLink exact activeClassName="active_class" className="navlink" to="/resume">Resume </NavLink>
                              </li>
                              <li class="nav-item">
                              <NavLink exact activeClassName="active_class" className="navlink" to="/projects">Projects </NavLink>
                              </li>
                              {/*<li class="nav-item">
                              <NavLink exact activeClassName="active_class" className="navlink" to="/service">Services </NavLink>
                              </li>*/}
                              <li class="nav-item">
                              <NavLink exact activeClassName="active_class" className="navlink" to="/achivements">Achivements </NavLink>
                              </li>
                              <li class="nav-item">
                              <NavLink exact activeClassName="active_class" className="navlink" to="/contact"> Contact</NavLink>
                              </li>

                            </ul>
                          </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </>
    );
}

export default Menu;