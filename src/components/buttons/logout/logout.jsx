import { Button } from "../button";
import "./logout.css";

export const LogoutButton = ({ logout }) => {
  return (
    <Button className='logout' onClick={logout}>
      Logout
    </Button>
  );
};
