import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "969341e6-3ab4-4462-9896-6bb82b3f0cc3");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Sent Successfully",
                text: "You will be contacted shortly",
                icon: "success"
              });
        }
      };

  return (
    <>
    <div>
        <h2 className='my-20 text-center text-4xl'>Contact Me </h2>
    </div>
    <section className="contact">
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className="input-form">
                    <label>Full Name </label>
                    <input type="text" className='field' placeholder='Enter Your Name' name='name' required />
                </div>
                <div className="input-form">
                    <label>Email Address </label>
                    <input type="text" className='field' placeholder='Enter Your Email Address' name='email' required />
                </div>
                <div className="input-form">
                    <label>Your Message </label>
                    <textarea name="message"  className='field mess' placeholder='Enter Your Message' required></textarea>
                </div>
                <button type='submit'>Send Message</button>
            </form>
        </section>
    </>
  )
}

export default Contact
