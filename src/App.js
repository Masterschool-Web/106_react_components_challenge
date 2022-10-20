import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/layout/navbar/Navbar";
import characters from "./data/characters.json";
import { ChooseButton } from "./components/buttons/choose/Choose";

const App = () => {
  const [loggedCharacter, setLoggedCharacter] = useState(null);
  const [allCharacters, setAllCharacters] = useState([...characters]);
  const [chosen, setChosen] = useState([]);

  const login = (id) => {
    setAllCharacters([
      ...characters.filter((character) => character.id !== id),
    ]);
    setLoggedCharacter(characters.find((c) => c.id === id));
    setChosen([]);
  };

  const logout = () => {
    setAllCharacters([...characters]);
    setLoggedCharacter(null);
  };

  const addCharacter = (id) => {
    if (chosen.length === 5) {
      window.alert("Cannot choose more than 5");
      return;
    }

    setAllCharacters([
      ...characters
        .filter((character) => character.id !== id)
        .filter((character) => character.id !== loggedCharacter.id)
        .filter((character) => !chosen.includes(character.id)),
    ]);
    setChosen([...chosen, id]);
  };

  const removeCharacter = (id) => {
    const filteredChosen = chosen.filter((chosenId) => chosenId !== id);

    setChosen(filteredChosen);

    setAllCharacters([
      ...characters
        .filter((character) => character.id !== loggedCharacter.id)
        .filter((character) => !filteredChosen.includes(character.id)),
    ]);
  };

  return (
    <div className='App'>
      <Navbar loggedCharacter={loggedCharacter} logout={logout} />
      <div id='main'>
        {!loggedCharacter ? (
          <>
            <h1>Choose Your Main Character</h1>
            <section id='character-container'>
              {characters.slice(0, 5).map((character) => (
                <div className='card card-login' key={character.id}>
                  <img src={character.image} alt='character' />
                  <div className='card-container'>
                    <h2>{character.name}</h2>
                  </div>
                  <div className='button-container'>
                    <button
                      className='choose-button'
                      onClick={() => login(character.id)}
                    >
                      Choose
                    </button>
                  </div>
                </div>
              ))}
            </section>
          </>
        ) : (
          <section id='character-container'>
            {allCharacters.map((character) => (
              <div className='card'>
                <img src={character.image} alt='character' />
                <div className='card-container'>
                  <h2>{character.name}</h2>
                  <p>
                    <span>Sex:</span> {character.gender}
                  </p>
                  <p>
                    <span>Status:</span> {character.status}
                  </p>
                  <p>
                    <span>Species:</span> {character.species}
                  </p>
                </div>
                <div className='button-container'>
                  <ChooseButton addCharacter={addCharacter} id={character.id} />
                </div>
              </div>
            ))}
          </section>
        )}
      </div>

      <aside>
        {loggedCharacter && (
          <section id='chosen-container'>
            {chosen.length === 0 ? (
              <div>No Character was chosen</div>
            ) : (
              <>
                {chosen.map((id) => {
                  const character = characters.find(
                    (character) => character.id === id
                  );
                  return (
                    <div className='chosen-card'>
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
                })}
              </>
            )}
          </section>
        )}
      </aside>
      <footer>
        <img src='../assets/avatar.png' alt='avatar' />
        <p>Created by David L. Rajcher</p>
      </footer>
    </div>
  );
};

export default App;
