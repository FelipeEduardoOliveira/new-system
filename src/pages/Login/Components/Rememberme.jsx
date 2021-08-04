import React from "react";
import { RemeberMeContainer } from "../styled";

function RemeberMe() {
  return (
    <RemeberMeContainer>
      <label htmlFor="rememberme">
        <input type="checkbox" id="rememberme" />
        Remeber-me
      </label>
      <p>Forgot password?</p>
    </RemeberMeContainer>
  );
}

export default RemeberMe;
