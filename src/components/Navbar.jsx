import styled from "styled-components";
import { Avatar } from "@mantine/core";
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { showNotification } from "@mantine/notifications";

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
  return (
    <StyledNav>
      <h1>#todo app</h1>
      <div className="profile">
        <Avatar onClick={() => {}} radius="md" />
      </div>
    </StyledNav>
  );
};

export default Navbar;
