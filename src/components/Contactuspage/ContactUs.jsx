// import React from "react";
// // import { Form, Button } from "react-bootstrap";
// import "./ContactUs.css"; // Make sure to create and style this CSS file for custom styles

// const ContactUs = () => {
//   return (
//     <div className="contact-us-section ">
//       <div className="container">
//         <div className="row p-0">
//           <div
//             data-aos="fade-right"
//             data-aos-offset="300"
//             data-aos-duration="2000"
//             data-aos-easing="ease-in-sine"
//             className="col-lg-10 mb-4"
//           >
//             <h2 className="section-title">CONTACT US</h2>
//             <h2
//               className="dss-fw-400 dv-fs-70"
//               style={{ letterSpacing: "-5.8px" }}
//             >
//               WE WANT TO <span className="text-primary">HEAR</span>
//               <br /> FROM <span className="text-primary">YOU</span>.
//             </h2>
//           </div>
//         </div>

//         <div className="row p-0">
//           <div className="col-lg-4">
//             <p className="dss-fw-700" style={{ fontSize: "14.5px" }}>
//               Reach us to
//             </p>

//             <div className="contact-info mt-4">
//               <a href="mailto:info@dovehousecapital.com">
//                 <p>
//                   <strong>
//                     <img
//                       src="/images/icons/Email.svg"
//                       className=" social-icons"
//                     />
//                   </strong>
//                   info@dovehousecapital.com
//                 </p>
//               </a>
//               <p>
//                 <strong>
//                   {" "}
//                   <img
//                     src="/images/icons/Phone.svg"
//                     className=" social-icons"
//                   />
//                 </strong>
//                 +44 64543 84674
//               </p>
//               <p>
//                 <strong>
//                   <img
//                     src="/images/icons/Address.svg"
//                     className=" social-icons"
//                   />
//                 </strong>
//                 Level 3, 697 Collins Street, Docklands VIC 3008
//               </p>
//               <div className="social-media mt-3">
//                 <p className="dss-fw-700">Social Media:</p>
//                 <div className="icons-social-media">
//                   <a href="#">
//                     <img
//                       src="/images/icons/Facebook.svg"
//                       className="social-icons-contact"
//                     />
//                   </a>
//                   <a href="#">
//                     <img
//                       src="/images/icons/LinkedIn.svg"
//                       className="social-icons-contact"
//                     />
//                   </a>
//                   <a href="#">
//                     <img
//                       src="/images/icons/X logo.svg"
//                       className="social-icons-contact"
//                     />
//                   </a>
//                   <a href="#">
//                     <img
//                       src="/images/icons/insta.svg"
//                       className="social-icons-contact"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-8">
//             <div className="inquiry-form-section py-5">
//               <div className="form-header mb-4">
//                 <h2>SEND</h2>
//                 <h2 className="text-primary">INQUIRY</h2>
//               </div>
//               <form>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     placeholder="Name"
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     placeholder="Phone"
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="email"
//                     className="form-control mb-3"
//                     placeholder="Email"
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     placeholder="Subject"
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <textarea
//                     className="form-control mb-3"
//                     rows="3"
//                     placeholder="Message"
//                   ></textarea>
//                 </div>
//                 <div className="btn-section">
//                   <button
//                     type="submit"
//                     className="btn btn-outline-primary btn-block form-button"
//                   >
//                     SEND
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container"></div>
//     </div>
//   );
// };

// export default ContactUs;
import React, { useState } from "react";
// import emailjs from "emailjs-com";
import "./ContactUs.css"; // Make sure to create and style this CSS file for custom styles

const ContactUs = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_dl9swcd",
    //     "template_j9kff9f",
    //     e.target,
    //     "i6u0wWhzDDzj8hTOo"
    //   )
    //   .then(
    //     (response) => {
    //       console.log("SUCCESS!", response.status, response.text);
    //       alert("Your message has been sent successfully!");
    //     },
    //     (error) => {
    //       console.log("FAILED...", error);
    //       alert("Failed to send your message. Please try again.");
    //     }
    //   );

    setFormData({
      user_name: "",
      user_phone: "",
      user_email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-us-section">
      <div className="container">
        <div className="row p-0">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="2000"
            data-aos-easing="ease-in-sine"
            className="col-lg-10 mb-4"
          >
            <h2 className="section-title">CONTACT US</h2>
            <h2
              className="dss-fw-400 dv-fs-70 contact-heading"
              style={{ letterSpacing: "-5.8px" }}
            >
              WE WANT TO <span className="text-primary">HEAR</span>
              <br /> FROM <span className="text-primary">YOU</span>.
            </h2>
          </div>
        </div>

        <div className="row p-0">
          <div className="col-lg-4">
            <p className="dss-fw-700" style={{ fontSize: "14.5px" }}>
              Reach us to
            </p>

            <div className="contact-info mt-4">
              <a href="mailto:info@dovehousecapital.com">
                <p>
                  <strong>
                    <img
                      src="/images/icons/Email.svg"
                      className="social-icons"
                    />
                  </strong>
                  info@dovehousecapital.com
                </p>
              </a>
              <p>
                <strong>
                  {" "}
                  <img src="/images/icons/Phone.svg" className="social-icons" />
                </strong>
                +44 64543 84674
              </p>
              <p>
                <strong>
                  <img
                    src="/images/icons/Address.svg"
                    className="social-icons"
                  />
                </strong>
                Level 3, 697 Collins Street, Docklands VIC 3008
              </p>
              <div className="social-media mt-3">
                <p className="dss-fw-700">Social Media:</p>
                <div className="icons-social-media">
                  <a href="#">
                    <img
                      src="/images/icons/Facebook.svg"
                      className="social-icons-contact"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/images/icons/LinkedIn.svg"
                      className="social-icons-contact"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/images/icons/X logo.svg"
                      className="social-icons-contact"
                    />
                  </a>
                  {/* <a href="#">
                    <img
                      src="/DoveHouse-Capital/public/images/icons/"
                      className="social-icons-contact"
                    />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="inquiry-form-section py-5">
              <div className="form-header mb-4">
                <h2>SEND</h2>
                <h2 className="text-primary">INQUIRY</h2>
              </div>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-3"
                    name="user_name"
                    placeholder="Name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-3"
                    name="user_phone"
                    placeholder="Phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control mb-3"
                    name="user_email"
                    placeholder="Email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-3"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control mb-3"
                    name="message"
                    rows="3"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="btn-section">
                  <button
                    type="submit"
                    className="btn btn-outline-primary btn-block form-button"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
