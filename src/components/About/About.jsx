import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";
import Footer from "../Footer";



const About = (props) => {
const img ="/images/myimage.png";

    return (
        <>
        <div className="mainDiv">
                    <div className="first_half">
                        <div className="card_area">
                            <div className="card">
                             <img src={img} className="card-img-top" alt="khurshidasetu"/>
                              <div className="card-body">
                                <h1 className="card-title">Khurshida Alam Setu</h1>
                                <div class="d-md-none d-sm-block buttons">
                                    <Button className="resume_button" variant="contained" color="primary" href="resume">
                                        <span>
                                            <NavLink exact activeClassName="active_class" className="btnlink1" to="/resume">Resume</NavLink> 
                                        </span> 
                                    </Button>
                                    <Button className="project_button" variant="outlined" color="primary" href="projects">
                                      <span>
                                        <NavLink exact activeClassName="active_class" className="btnlink2" to="/projects">Projects </NavLink>
                                      </span>
                                    </Button>
                                </div>
                                
                              </div>
                            </div>
                            <div className="social"> 
                                            <a target="blank" href="https://www.facebook.com/khurshidaalamsetu"><FacebookIcon className="facebook"/></a>
                                            <a target="blank" href="https://github.com/khurshidaalam"><GitHubIcon className="github"/></a>
                                            <a target="blank" href="https://twitter.com/ksetu2"><TwitterIcon className="twitter"/></a>
                                            <a target="blank" href="https://www.linkedin.com/in/khurshida-alam-154743172"><LinkedInIcon className="linkedin"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="second_half">
                        <div className="information_area">
                            <h1 className="hello">Hello</h1>
                            <p>I am Khurshida alam setu & I am a front end web developer</p>
                            <p>I like to work with Technology. I have prepared myself as a programmer
                            with honesty and self learned from various online courses like udacity and coursera.
                            I am a quick learner. If i see any problem, i try and try to solve it anyhow.</p>
                            <div class="d-md-block d-sm-none d-lg-block  buttons2">
                                <Button className="resume_button" variant="contained" color="primary" href="resume">
                                    <span>
                                        <NavLink exact activeClassName="active_class" className="btnlink1" to="/resume">Resume</NavLink> 
                                    </span> 
                                </Button>
                                <Button className="project_button" variant="outlined" color="primary" to="/projects">
                                    <span>
                                        <NavLink exact activeClassName="active_class" className="btnlink2" to="/projects">Projects </NavLink>
                                    </span>
                                </Button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>  
        </>
    )
}

export default About;