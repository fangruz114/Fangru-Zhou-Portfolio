import React from "react";

const Contact = () => {

  return (
    <>
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Contact</span>
              <h3>Get in Touch</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div className="right">
          <ul>
            <li>
              <p>
                <span>Email:</span>
                <a href="mailto:fangruz@gmail.com">fangruz@gmail.com</a>
              </p>
            </li>
            <li>
              <p>
                <span>Phone:</span>
                <a href="tel:8589529930">858-952-9930</a>
              </p>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
};

export default Contact;
