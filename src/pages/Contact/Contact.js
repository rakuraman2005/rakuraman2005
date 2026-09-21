import React from 'react'
import './Contact.css'
import Marquee from "react-fast-marquee";
import Swal from 'sweetalert2'
  
  
  const Contact = () => {
    
    const [result, setResult] = React.useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "870ed017-5ae9-4598-bc74-21d78c8488c8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
  title: "Success!",
  text: "Message sent!",
  background:"black",
  color:"white",
  icon: "success",
  
});
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      Swal.fire({
  title: "FAILED!",
  text: "Message not sent!",
  icon: "error",
  background:"black",
  color:"white",
});
      setResult(data.message);
    }
  };


  return (
    <>
    <section className='contact'>
    <form onSubmit={onSubmit}>
     <center> <h2>Contact</h2></center>
      <div className='Input-box'>
        <label>Full Name</label>
        <input type='text' className='field' placeholder='Enter your Name' name='name' required />
      </div>
      <div className='Input-box'>
        <label>Email Address</label>
        <input type='email' className='field' placeholder='Enter your email' name='email' required />
      </div>
      <div className='Input-box'>
        <label>Your Message</label>
        <textarea className='field mess' name="message"  placeholder='Enter your message' required></textarea>
      </div>
      <button type ="submit">Send Message</button>
    </form>
    </section>

      <div className='contact-links'>
        <Marquee>
       <a href='https://github.com/rakuraman2005'><img className='contact-img' src={require('./icons8-github-squared-100.png')} ></img> </a>
       <a href='https://linkedin.com/in/rakuraman2005/'> <img className='contact-img' src={require('./icons8-linkedin-144.png')} href=''></img></a>
       <a href='https://leetcode.com/u/rakuraman2005/'> <img className='contact-img' src={require('./icons8-leetcode-96.png')} href=''></img></a>
        <a href='https://www.youtube.com/@rakuraman2005'> <img className='contact-img' src={require('./icons8-youtube-96.png')} href=''></img></a>
       </Marquee>
      </div>
      </>
  )
}

export default Contact