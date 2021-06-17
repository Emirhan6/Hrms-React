import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      {/* <Button>Giriş Yap</Button>
      <Button>Kayıt Ol</Button> */}

      <Menu.Item>
        <div class="ui buttons">
          <button class="ui button" onClick={signIn}>Giriş Yap</button>
          <div class="or"></div>
          <button class="ui positive button">Kayıt Ol</button>
        </div>
      </Menu.Item>
    </div>
  );
}
