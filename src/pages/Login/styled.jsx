import styled from "styled-components";

export const ContainerLogin = styled.div`
  background: linear-gradient(0deg, #11998e 0%, #38ef7d 55%);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContainerLogin__login = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1.6rem;
  border-radius: 20px;
  box-shadow: 0 7px 14px 0 #11998e;
`;
export const ContainerLogin__login_Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 1rem;
  text-align: center;

  h1 {
    font-weight: 600;
    color: #239750;
    font-size: 45px;
  }

  span {
    color: #095750;
    line-height: 1.6;
    font-family: "Roboto", sans-serif;
    font-size: 1.7rem;
    font-weight: 400;
  }
`;

export const ContainerLogin__login_Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  margin-bottom: 20px;
`;
export const Fieldform = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-weight: 400;
    color: #0f8d82;
    font-size: 25px;
    margin-bottom: 0.5rem;
  }

  input {
    /* height: 35px; */
    border-radius: 30px;
    padding-right: 45px;
    padding: 15px;
    border: 1px solid #e8ebf3;
    outline: none;
    font-size: 18px;
    background-image: url(${(props) => props?.backGroundImage});

    background-position-x: 98%;
    background-position-y: 10px;
    z-index: 1;

    background-repeat: no-repeat;
  }
`;

export const RemeberMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1.5rem 0;

  input {
    margin-right: 10px;
  }
  label {
    cursor: pointer;
  }
  p {
    cursor: pointer;
  }
`;

export const ButtonForm = styled.button`
  background: linear-gradient(14deg, #38ef7eae 0%, #11998eb7 55%);
  color: #fff;
  box-shadow: 0 7px 14px 0 #11998ea9;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  margin-bottom: 1rem;
  font-size: 30px;
`;

export const DontHaveAccount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0.5rem;

  a {
    cursor: pointer;
  }
`;
