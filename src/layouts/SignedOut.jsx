import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      {/* <Button>Giriş Yap</Button>
      <Button>Kayıt Ol</Button> */}

      <Menu.Item>
        <div class="ui buttons">
          <button class="ui button" style={{color:"black"}} onClick={signIn}>Giriş Yap</button>
          <div class="or"></div>
          <button class="ui positive button"><Link style={{color:"black"}} to={"/register"}>Kayıt Ol</Link></button>
        </div>
      </Menu.Item>
    </div>
  );
}
