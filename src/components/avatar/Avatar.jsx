import "./avatar.css";

const Avatar = ({ loggedCharacter }) => {
  return (
    <div className='avatar'>
      <img src={loggedCharacter.image} alt='logged character' />
      <p>{loggedCharacter.name}</p>
    </div>
  );
};

export default Avatar;
