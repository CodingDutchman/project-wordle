import React from "react";
import GuessInput from "/src/components/GuessInput";
import GuessResults from "/src/components/GuessResults";
import { checkGuess } from "/src/game-helpers";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [solved, setSolved] = React.useState(false);
  console.log(answer);
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        addGuess={(input) => {
          setGuesses([...guesses, checkGuess(input, answer)]);
          if (input === answer) {
            setSolved(true);
          }
        }}
      />
      {solved && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {guesses.length === 6 && (
        <div className="sad banner">
          <p>
            <strong>Game over!</strong> The answer was
            <strong> {answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
