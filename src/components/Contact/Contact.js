import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';
import ScrollAnimation from "react-animate-on-scroll";
import "./Contact.css"
function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [contactUs, setContactUs] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("zyadomar112@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };



  const ShowContact = () => {
    fetch("https://portfolio-backend-steel-zeta.vercel.app/getContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setContactUs(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error); // Ensure setError is called correctly
      });
  };



  const addContactAPI = () => {
    const data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    fetch("https://portfolio-backend-steel-zeta.vercel.app/addContact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContactUs([...contactUs, data]);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setTimeout(() => {
          document.getElementById("contactDone").style.display = "flex";

          setTimeout(() => {
            document.getElementById("contactDone").style.display = "none";
          }, 4000);
        }, 4000);
      })
      .catch((error) => console.log(error));
  }

  return (
    <ContactWrapper id="contact">

      <div className="Container"  >
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn" style={{ marginBottom: '20px' }} >
          <div className="BigCard">
            <Email>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>zyadomar112@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={copyToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }} />
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:zyadomar112@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </Email>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" >
          <div className="BigCard">
            <Email>
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: "column", columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>Or Contact me here!</span>
                <div className="contactForm">
                  <style>
                    {`
                      .contactForm {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        justify-content: center;
                        row-gap: 1rem;
                        width: 450px;
                        
                        
                      }
                      input,
                      textarea {
                        width: 100%;
                        padding: 0.5rem;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        font-size: 1rem;
                      }
                      input:focus,
                      textarea:focus {
                        outline: none;
                        border-color: #007bff;
                      }
                      textarea {
                        height: 100px;
                      }
                        @media (max-width: 576px) {
                          .contactForm {
                            width: 300px;
                          }
                          input,
                          textarea {
                            width: 100%;
                          }
                        }
                        @media (max-width: 436px) {
                          .contactForm {
                            width: 250px;
                          }
                          input,
                          textarea {
                            width: 100%;
                          }
                        }
                    `}
                  </style>
                  <input placeholder="UserName" value={name} onChange={(e) => setName(e.target.value)} />
                  <input placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
              </div>
              <button
                className="btn PrimaryBtn btn-shadow"
                onClick={addContactAPI}
              >
                Submit
              </button>
            </Email>
            <div id="contactDone" style={{ display: "none", alignItems: "center", justifyContent: "center", gap: "1rem", flexDirection: "column", marginTop: "1rem" }}>
              <h1 style={{ color: "green", fontWeight: "bold" }}>I Recevied Your Contact, Thanks</h1>
              <p>I Hope You A Good Day.</p>
            </div>
          </div>

        </ScrollAnimation>

        {
          showContact && (
            <div className="showContactDiv">
              <input
                type="password"
                placeholder="Enter code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="codeInput"
              />
              <button className="btn PrimaryBtn btn-shadow" onClick={ShowContact}>GET</button>
            </div>
          )
        }


        <button onClick={() => setShowContact(!showContact)} className="getContactBtn">getContact</button>
        <p>{error}</p>
        {
          contactUs?.map((item, index) => {
            return (
              <div className="contactCardDiv" key={index}>
                <div className="contactCard">
                  <h1>{item.name}</h1>
                  <p>{item.email}</p>
                  <p>{item.phone}</p>
                  <p>{item.message}</p>
                </div>
              </div>

            )
          })
        }
      </div>
    </ContactWrapper>
  );
}

export default Contact;
