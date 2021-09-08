import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () =>{
    return (
        <>

<footer className="footer">
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-lg-12 col-sm-12 col-md-12">
                                <div className="col-lg-8 col-sm-12 col-md-8">
                                    <div className="fcontact">
                                        <div className="phone">
                                            <h5>call</h5> 
                                            <a href="tel:01878631728"><p>+880-01878631728</p></a>
                                        </div>
                                        <div className="email">
                                            <h5>write</h5>
                                            <a href="mailTo:setukhurshidaalom@gmail.com"><p>setukhurshidaalom@gmail.com</p></a>
                                        </div>
                                        <div className="follow">
                                            <h5>follow</h5>
                                            <p> 
                                            <a target="blank" href="https://www.facebook.com/khurshidaalamsetu"><FacebookIcon className="facebook"/></a>
                                            <a target="blank" href="https://github.com/khurshidaalam"><GitHubIcon className="github"/></a>
                                            <a target="blank" href="https://twitter.com/ksetu2"><TwitterIcon className="twitter"/></a>
                                            <a target="blank" href="https://www.instagram.com/khurshida_alam_setu"><InstagramIcon className="instagram"/></a>
                                            <a target="blank" href="https://www.linkedin.com/in/khurshida-alam-154743172"><LinkedInIcon className="linkedin"/></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                           <div className="col-12 col-sm-12">
                                <div className="copyright">
                                    <p>&copy; copyright reserved by KAS &copy; 2021 </p>
                                </div>
                           </div>
                       </div>
                   </div>
               </div>
                   
               </footer>
        </>
    )
}

export default Footer;