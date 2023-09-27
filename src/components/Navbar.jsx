import styled from "styled-components";
import { Avatar } from "@mantine/core";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { showNotification } from "@mantine/notifications";
import {auth} from "../config/firebase"

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  text-align: center;

  .profile {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const Navbar = ({ isAuth, setIsAuth, profile, setProfile }) => {
  console.log(isAuth)

  const handleAuthentication = async () => {
    console.log("Authenticating user")
  
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user;

      // Set to state
      setIsAuth(true);
      setProfile(user.providerData[0]);
    } catch (err) {
      console.error(err);
    }
  }

  const handleLogout = async () => {
    // Sign out user if authenticated
    console.log("Logging out user")

    try {
      await signOut(auth);

      // Clear state
      setIsAuth(false);
      setProfile({});
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <StyledNav>
      <h1>#modern todolist</h1>
      <div className="profile">
        <Avatar onClick={isAuth ? handleLogout : handleAuthentication} radius="md" src={profile.photoURL} />
      </div>
    </StyledNav>
  );
};

export default Navbar;
