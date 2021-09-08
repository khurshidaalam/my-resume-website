import React, { useState } from "react";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Footer from "../Footer";
import Button from '@material-ui/core/Button';

const Contact = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    messege: "",

  })

   const inputEvent = (event) =>{

    const {name, value} = event.target;

      setData((preValue)=>{
        return {
          ...preValue,
         [name] : value,
        }
        
      });

   }

   const inputData = () =>{
     alert(`
     name: ${data.name}
     email: ${data.email}
     phone: ${data.phone}
     messege: ${data.messege}`);
   }

    return(
        <>
        <div className="about_mainDiv">
            <div className="page_heading">
            <h1><ArrowRightIcon className="pont_arrow"/>Contact me</h1>
            </div>
            <section className="contacts">
                <div className="container-fluid">
                    <div className="contact_area">
                    <form class="form-inline">
                        <div class="form-group">
                          <label for="name">Name:</label>
                          <input onChange={inputEvent} type="text"
                           class="form-control" 
                           id="name"
                           name="name"
                           value={data.name}
                           />
                        </div>
                        <div class="form-group">
                          <label for="email">Email address:</label>
                          <input onChange={inputEvent} type="email"
                           class="form-control" 
                           id="email"
                          name="email"
                          value={data.email}

                           />
                        </div>
                        <div class="form-group">
                          <label for="phone">Phone number:</label>
                          <input onChange={inputEvent}
                           type="number" 
                           class="form-control" 
                           id="phone"
                          name="phone"
                          value={data.phone}
                          />
                        </div>
                        <div class="form-group">
                            <label for="message">Messege:</label>
                            <textarea onChange={inputEvent} 
                            type="text" 
                            class="form-control" 
                            id="messege"
                            name="messege"
                            value={data.messege}
                            />
                          </div>
                        <div class="checkbox">
                          <label><input onChange={inputEvent} type="checkbox"/> Remember me</label>
                        </div>
                        <Button onClick={inputData} variant="contained" color="primary"
                         type="submit">Submit</Button>
                    </form>
                    <div className="stokphoto">
                        <img src="/images/message.png"/>
                    </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        </>
    )
    
}

export default Contact;