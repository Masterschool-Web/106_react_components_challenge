import "./avatar.css";

export const Avatar = ({ character }) => {
  return (
    <div class='avatar'>
      <img src={character.image} />
      <p>{character.name}</p>
    </div>
  );
};
