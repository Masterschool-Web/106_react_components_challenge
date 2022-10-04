import "./card.css";
export const LoginCard = ({ character, login }) => {
  return (
    <div className='card card-login' key={character.id}>
      <img src={character.image} alt='character' />
      <div className='card-container'>
        <h2>{character.name}</h2>
      </div>
      <div className='button-container'>
        <button className='choose-button' onClick={() => login(character.id)}>
          Choose
        </button>
      </div>
    </div>
  );
};
