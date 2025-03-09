import styled from "styled-components";

const BaseButton = styled.button`
  background-color: #007bff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: #fff;
  font-family: roboto;
  font-weight: bold;
  font-size: 1.25rem;
  max-width: fit-content;
  cursor: pointer;

  :hover {
    background-color: #e0f4fc;
    color: #132661;
  }
`;

export default BaseButton;
