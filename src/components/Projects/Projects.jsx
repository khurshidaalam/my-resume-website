import React from "react";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Footer from "../Footer";
import PageOne from "./ProjctPgOne";
import PageTwo from "./ProjctPgTwo";
import PageThree from "./ProjctPgThree";

const Projects = () => {
    return (
        <>
        <div className="about_mainDiv">
            <div className="project_page_heading">
            <h1><ArrowRightIcon className="pont_arrow"/>Projects</h1>
            
            <p>All projects are done by myself. i have self trained 
            from youtube and few online course platform.</p>
            </div>
            
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active" >
                  <PageOne/>
                  </div>
                  <div class="carousel-item">
                  <PageTwo/>
                  </div>
                  <div class="carousel-item">
                  <PageThree/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Projects;