import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.div`
  background-image: url(/footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;
  font-size: 0.8rem;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">All Rights Reserved to || Zeyad Mashaal 2025.</div>

    </FooterSection>
  );
}

export default Footer;
