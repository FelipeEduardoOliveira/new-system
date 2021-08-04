import React from "react";
import { ContainerLogin__login_Form, Fieldform, ButtonForm } from "../styled";

import Remeberme from "./Rememberme";
import FooterForm from "./FooterForm";
import user from "../../../assets/icon/user.png";
import lock from "../../../assets/icon/lock.png";

function FormContainer() {
  return (
    <ContainerLogin__login_Form onSubmit={() => alert("Teste")}>
      <Fieldform backGroundImage={user}>
        <label htmlFor="user">Username </label>
        <input type="text" placeholder="Enter username" required id="user" />
      </Fieldform>

      <Fieldform backGroundImage={lock}>
        <label htmlFor="password">Password </label>
        <input
          type="text"
          placeholder="Enter password"
          required
          id="password"
        />
      </Fieldform>
      <Remeberme />

      <ButtonForm type="submit">Log in</ButtonForm>

      <FooterForm />
    </ContainerLogin__login_Form>
  );
}

export default FormContainer;
