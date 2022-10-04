import { useState } from "react";
import "./App.css";
import characters from "./data/characters.json";

// Components
import {
  Avatar,
  Card,
  ChosenCard,
  Footer,
  LogoutButton,
  Navbar,
} from "./components";

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
      <Navbar logout={logout} loggedCharacter={loggedCharacter} />
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
              <Card character={character} addCharacter={addCharacter} />
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
                    <ChosenCard
                      character={character}
                      removeCharacter={removeCharacter}
                    />
                  );
                })}
              </>
            )}
          </section>
        )}
      </aside>
      <Footer />
    </div>
  );
};

export default App;
