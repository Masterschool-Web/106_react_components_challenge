import Avatar from "../../avatar/Avatar";
import { LoggedOutButton } from "../../buttons/logout/Logout";
import "./navbar.css";

export const Navbar = ({ loggedCharacter, logout }) => {
  if (!loggedCharacter) return <nav></nav>;

  return (
    <nav>
      <Avatar loggedCharacter={loggedCharacter} />
      <LoggedOutButton logout={logout} />
    </nav>
  );
};
