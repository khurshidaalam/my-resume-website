import React from "react";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Footer from "../Footer";

const Achivements = () => {

    return (
        <>
        <div className="about_mainDiv">
            <div className="page_heading">
            <h1><ArrowRightIcon className="pont_arrow"/>Achivements</h1>
            </div>
            <section className="achivements"> 
                <div className="container">
                    
                    <div className="achivement_card">
                    <br/>
                    <div className="achivement_details">
                            <h3>HTML, CSS, Javascript for Web Developers</h3>
                            <p>John Hopkins University</p>
                            <p>Commonwealth of learning - coursera</p>
                            <br/>
                            <h3>what i have learned -</h3>
                            <ul>
                                <li><p>HTML</p></li>
                                <li><p>Cascading style sheet(CSS)</p></li>
                                <li><p>CSS Frameworks</p></li>
                                <li><p>JavaScript</p></li>
                            </ul>
                        </div>
                        <div className="achivement_image">
                            <img src="/images/john.PNG"></img>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="container">
                <div className="achivement_card">
                    <br/>
                    <div className="achivement_details">
                            <h3>Front-End web ui frameworks and tools: Bootstrap 4</h3>
                            <p>the hong kong university of science and technology</p>
                            <p>Commonwealth of learning - coursera</p>
                            <br/>
                            <h3>what i have learned -</h3>
                            <ul>
                                <li><p>Bootstrap (Front-End Framework)</p></li>
                                <li><p>Node.Js</p></li>
                                <li><p>Jquery</p></li>
                                <li><p>SASS (Stylesheet Language)</p></li>
                            </ul>
                        </div>
                        <div className="achivement_image">
                            <img src="/images/BOOTSTRAP.jpeg"></img>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="container">
                <div className="achivement_card">
                    <br/>
                        <div className="achivement_details">
                            <h3>Use Wordpress to Create Blog for your Business</h3>
                            <p>Coursera Project Network</p>
                            <br/>
                            <h3>what i have learned -</h3>
                            <ul>
                                <li><p>learn to use features in wordpress.</p></li>
                                <li><p>Create a blog post.</p></li>
                                <li><p>Publish a website.</p></li>
                            </ul>
                        </div>
                        <div className="achivement_image">
                            <img src="/images/WPC.jpeg"></img>
                        </div>
                    </div>
                    </div>
            </section>
            <Footer/>
        </div>
        </>
    )

}

export default Achivements;