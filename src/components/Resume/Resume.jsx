import React from "react";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Button from '@material-ui/core/Button';
import Footer from "../Footer";

const Resume = () => {
    return (
        <>
        <div className="about_mainDiv">
            <div className="page_heading"><ArrowRightIcon className="pont_arrow"/><h1>Resume</h1></div>
            
            <section className="education">
                <div className="container">
                    <div className="section1_heading">
                        <h2>Education</h2>
                        <a href="/assets/cv_of_khurshida_alam_setu.pdf" download>
                            <Button className="download_button" variant="contained" color="primary">
                             <span className="cv">Download CV</span> 
                            </Button>
                        </a>
                    </div>
                    <div className="education_card">
                    <br/>
                        <div className="institute_intro">
                            <h2>2017-2020</h2>
                            <h3>National University</h3><p>Bachalor of Science</p>
                            <p>Gazipur, Dhaka</p>
                            
                        </div>
                        <div className="institute_details">
                            <p>right now i am studying in an institute which is regulated by 
                            National University, Bangladesh. The institution name is <span>Uttara 
                            Institute of Business and Technology</span>. Due to Corona pendemic i couldn't
                            complete my graduation within 2020.</p>
                            <p>I am studying on Computer Science and Engineering subject. My evarage 
                            CGPA-3.00 out of 4.00 till now.</p>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <div className="education_card">
                    <br/>
                        <div className="institute_intro">
                            <h2>2014-2016</h2>
                            <h3>Nawab habibullah model school and college</h3>
                            <p>HSC</p>
                            <p>Uttara, Dhaka</p>
                        </div>
                        <div className="institute_details">
                            <p>I am very glad to receive my Higher secondery School Certificate
                            from such a great institute where descipline and quality prefers first.
                            The session of 2 years have tought me a lot.
                            </p>
                            <p>I completed my HSC in Science background. My Grade point evarage (GPA)
                            is 4.83 out of 5.00 .</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="skill_set">
                <div className="container">
                    
                    <div className="skill_card">
                    <h2> Professional Skillset</h2><br/>
                    <div className="skill_details">
                    <h4><ArrowRightIcon className="pont_arrow"/>Web Development & web design</h4>
                    <br/>
                    <div className="skills">
                        <ul className="web_design">
                            <li><p>HTML</p></li>
                            <li><p>CSS</p></li>
                            <li><p>SASS</p></li>
                            <li><p>Tailwind CSS</p></li>
                            <li><p>JavaScript</p></li>
                            <li><p>Bootstrap 5</p></li>
                            
                        </ul>
                        <ul className="web_dev">
                            <li><p>ReactJs</p></li>
                            <li><p>Material UI</p></li>
                            <li><p>Es6</p></li>
                            <li><p>Nodejs</p></li>
                            <li><p>expressJs</p></li>
                            <li><p>MongoDB</p></li>
                        </ul>
                        
                    </div>
                    <div className="language_skill">
                    <h4><ArrowRightIcon className="pont_arrow"/>Language skill</h4>
                    <br/>
                        <ul className="languages">
                            <li><p>Bangla (Fluent)</p></li>
                            <li><p>English (Fluent)</p></li>
                        </ul>
                    </div>
                    </div>
                    </div>
                </div>
            </section>
            <br/>
            <Footer/>
        </div>
        </>
    )
}

export default Resume;