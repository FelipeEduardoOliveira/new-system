import React from "react";
import { ContainerLogin, ContainerLogin__login } from "./styled";

import LoginHeader from "./Components/HeaderContainer";

import FormContainer from "./Components/FormContainer";

function Login() {
  return (
    <ContainerLogin>
      <ContainerLogin__login>
        <LoginHeader />
        <FormContainer />
      </ContainerLogin__login>
    </ContainerLogin>
  );
}

export default Login;
