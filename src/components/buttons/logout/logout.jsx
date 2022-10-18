import "./logout.css";

export const LogoutButton = ({ logout }) => {
  return (
    <button class='logout' onClick={logout}>
      Logout
    </button>
  );
};
