import React from "react";
import { DontHaveAccount } from "../styled";

function FooterForm() {
  return (
    <DontHaveAccount>
      <p>
        Don't have an account?{" "}
        <strong>
          <a>Free Register</a>
        </strong>
      </p>
    </DontHaveAccount>
  );
}

export default FooterForm;
