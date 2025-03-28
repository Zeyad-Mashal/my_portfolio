import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 1rem;
  width: 100%;

  span {
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 992px) {
    span {
      font-size: 1.5rem;
    }
  }
`;

export const ContactForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  width: 450px;

  padding: 1rem;
background-color: red;
  input,
  textarea {
    width: 400px;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }
  textarea {
    resize: none;
    height: 100px;
  }
  @media (min-width: 576px) {
    input,
    textarea {
      width: 80%;
    }
  }
  @media (min-width: 768px) {
    input,
    textarea {
      width: 70%;
    }
  }
  @media (min-width: 992px) {
    input,
    textarea {
      width: 60%;
    }
  }

`;