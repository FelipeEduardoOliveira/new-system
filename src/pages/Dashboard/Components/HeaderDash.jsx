import React from "react";
import { HeaderDash, HeaderDash__Containers } from "../styled";
import Logo from "../../../assets/icon/logotipo.png";

function Header() {
  return (
    <HeaderDash>
      <HeaderDash__Containers>
        <img src={Logo} />

        <p>Hamburguer</p>
      </HeaderDash__Containers>
      <HeaderDash__Containers>
        <p>Linguagem</p>

        <p>Notificação</p>

        <p>usuario</p>
      </HeaderDash__Containers>
    </HeaderDash>
  );
}

export default Header;
