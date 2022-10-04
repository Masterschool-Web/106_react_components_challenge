import "./navbar.css";
import { LogoutButton } from "../../buttons/logout/logout";
import { Avatar } from "../../avatar/avatar";

export const Navbar = ({ loggedCharacter, logout }) => {
  return (
    <nav>
      {loggedCharacter && (
        <>
          <Avatar character={loggedCharacter} />
          <LogoutButton logout={logout} />
        </>
      )}
    </nav>
  );
};
