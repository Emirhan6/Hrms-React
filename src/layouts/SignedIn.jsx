import React from 'react'
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="data:image/jpeg;base64,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"></Image>
                <Dropdown pointing="top left" text="Emirhan">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}