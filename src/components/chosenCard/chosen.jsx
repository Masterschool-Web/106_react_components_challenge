import "./chosen.css";

export const ChosenCard = ({ character, removeCharacter }) => {
  return (
    <div className='chosen-card' key={character.id}>
      <div className='avatar'>
        <img src={character.image} alt='character' />
        <p>{character.name}</p>
      </div>
      <button
        className='remove-button'
        onClick={() => removeCharacter(character.id)}
      >
        Remove
      </button>
    </div>
  );
};
