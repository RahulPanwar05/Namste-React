import React, { useEffect } from "react";

function ContactUs() {


  useEffect(() => {
    console.log('component mount')
    const interval = setInterval(() => {
      console.log("hello");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("component unmount")
    };
  }, []);



  return (
    <div>
      <h1>Contact us</h1>
    </div>
  );
}

export default ContactUs;
