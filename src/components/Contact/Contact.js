import React, { useState } from "react";
import { ContactWrapper, Email, ContactForm } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';

import ScrollAnimation from "react-animate-on-scroll";
function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("zyadomar112@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

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
                  <input placeholder="UserName" />
                  <input placeholder="Phone Number" />
                  <textarea placeholder="Your Message" />
                </div>
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

      </div>
    </ContactWrapper>
  );
}

export default Contact;
