import React,{useState} from "react";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router-dom";
import Favories from "./Favories";
import { useSelector } from "react-redux";

export default function Navi() {
  const {favorieItems} = useSelector(state => state.favories)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const history = useHistory()

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="Ana Sayfa" href="/" />
          <Menu.Item>{favorieItems.length>0 && <Favories/>}</Menu.Item>

          <Menu.Menu position="right">
            {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn} />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
