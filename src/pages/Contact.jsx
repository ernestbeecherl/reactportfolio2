import React from 'react';

// Contact component for displaying contact form
export default function Contact() {
  return (
    <div className="container">
      {/* Heading for the contact page */}
      <h1 className="text-center mb-5">Contact Me</h1>
      
      {/* Section containing the contact form */}
      <section>
        <div name="contact" className="d-flex justify-content-center align-items-center p-4">
          {/* Form for contacting the author */}
          <form action="" method="POST" className="max-w-600px w-100">
            {/* Information about contacting the author */}
            <div className="pb-4">
              <p>To get in touch with me, fill out the form or <a className="text-secondary-emphasis" href=" " >email me</a>
              </p>
            </div>
            
            {/* Input fields for name, email, and message */}
            <input className="form-control mb-4" type="text" placeholder="Name" name="name" required />
            <div className="invalid-feedback">Name is required.</div>
            <input className="form-control mb-4" type="email" placeholder="Email" name="email" required />
            <div className="invalid-feedback">Please enter a valid email address.</div>
            <textarea className="form-control mb-4" name="message" rows="5" placeholder="Message" required></textarea>
            <div className="invalid-feedback">Message is required.</div>
            
            {/* Submit button for the form */}
            <button className="btn btn-primary btn-lg btn-block">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};