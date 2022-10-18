import { Avatar } from "../../avatar/avatar";
import { LogoutButton } from "../../buttons/logout/logout";
import "./navbar.css";

export const Navbar = ({ loggedCharacter, logout }) => {
  if (!loggedCharacter) return <nav></nav>;
  const { image, name } = loggedCharacter;
  return (
    <nav>
      {loggedCharacter && (
        <>
          <Avatar image={image} name={name} />
          <LogoutButton logout={logout} />
        </>
      )}
    </nav>
  );
};
