import React, {useState} from 'react';
import EmailJS from 'emailjs-com';
import { useForm } from "react-hook-form";
import Secrets from "../secrets/Secrets";

function Contacts() {

    const [successMessage, setSuccessMessage] = useState("");
    const {register, handleSubmit, formState: { errors }} = useForm();


    const serviceID = Secrets.serviceID;
    const templateID = Secrets.templateID;
    const userID = Secrets.userID;

    const onSubmit = (data, r) => {
        sendEmail(
          serviceID,
          templateID,
          {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description
          },
          userID
        )
        r.target.reset();
      }

      const sendEmail = (serviceID, templateID, variables, userID) => {
        EmailJS.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Message sent successfully! I'll contact you as soon as possible.");
          }).catch(err => console.error(`Something went wrong ${err}`));
      }

    return (
        <div className="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out the form and describe your project and needs and I'll contact you as soon as possible.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-area">
                            {/* NAME INPUT */}
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                aria-invalid={errors.name ? "true" : "false"}
                                {...register("name", {
                                    required: "Please enter your name",
                                    maxLength: {
                                    value: 30,
                                    message:
                                        "Please enter a name with fewer than 30 characters",
                                    },
                                })}
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        <div className="text-area">
                            {/* PHONE INPUT */}
                            <input
                                id="phone"
                                type="text" 
                                className="form-control"
                                placeholder="Phone Number"
                                name="phone"
                                autoComplete="off"
                                aria-invalid={errors.phone ? "true" : "false"}
                                {...register("phone", {
                                    required: "Please enter your phone number",
                                })}
                            /> 
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>
                        <div className="text-area">
                            {/* EMAIL INPUT */}
                            <input 
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                autoComplete="off"
                                aria-invalid={errors.email ? "true" : "false"}
                                {...register("email", {
                                    required: "Please enter your email",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Please enter a valid email"
                                    }
                                })}
                            />  
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        <div className="text-area">
                            {/* SUBJECT INPUT */}
                            <input 
                                id="subject"
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                                autoComplete="off"
                                aria-invalid={errors.subject ? "true" : "false"}
                                {...register("subject", {
                                    required: "Please enter the subject",
                                })}
                            />  
                            <div className="line"></div>  
                        </div>   
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>                                  
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="text-area">
                            {/* DESCRIPTION INPUT */}
                            <textarea 
                                id="description"
                                type="text"
                                className="form-control"
                                placeholder="Please describe shortly your project..."
                                name="description"
                                aria-invalid={errors.description ? "true" : "false"}
                                {...register("description", {
                                    required: "Please describe shortly your project needs...",
                                })}
                            ></textarea>  
                            <div className="line"></div>
                        </div> 
                        <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>     
                        <button 
                            type="submit"
                            className="header-btn-main-offer contact-btn"  >contact me</button>                      
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts;
