import "./avatar.css";

export const Avatar = ({ name, image }) => {
  return (
    <div class='avatar'>
      <img src={image} alt='logged user' />
      <p>{name}</p>
    </div>
  );
};
