import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const FlexCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em;
  box-sizing: border-box;
  position: relative;
  width: 40%;
  min-width: 40%;
  @media (max-width: 900px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const CustomCard = styled(Card)`
  backdrop-filter: blur(20px) !important;
  background: #ffffff20 !important;
  display: flex;
  height: 80vh;
  min-width: 100%;
  margin: auto;
  @media (max-width: 900px) {
    height: auto;
  }
`;

export const Input = styled.input`
  border-radius: 30px !important;
  padding: 1em !important;
  box-shadow: 0 0 5px 0 #3f50b533 !important;
  font-weight: lighter !important;
  font-size: 20px !important;
  background: transparent;
  font-family: "poppinslight";
  border: 2px solid white;
  width: 100%;
  color: white;
  outline: none;
  &::placeholder {
    color: #b3b3b3;
  }
`;

export const Button = styled.input`
  background: white;
  border-radius: 30px;
  border: none;
  padding: 13px 40px;
  color: #663c6f;
  transition: 0.3s;
  margin-top: 15px;
  font-size: 20px;
  &:hover {
    box-shadow: 2px 2px 5px 0 #00000069;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
