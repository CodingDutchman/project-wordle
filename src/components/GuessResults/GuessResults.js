import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "/src/constants";

function GuessResults({ guesses = [] }) {
  const remainingGuesses = NUM_OF_GUESSES_ALLOWED - guesses.length;
  let displayedGuesses = [...guesses];
  for (let i = 0; i < remainingGuesses; i++) {
    displayedGuesses.push([
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
      { letter: "", status: "" },
    ]);
  }
  console.log(displayedGuesses);

  return (
    <div className="guess-results">
      {displayedGuesses.map((guess, index) => (
        <p key={index} className="guess">
          {Object.keys(guess).length > 0 ? (
            guess.map(({ letter, status }, index) => (
              <span key={index} className={`cell ${status}`}>
                {letter}
              </span>
            ))
          ) : (
            <>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
            </>
          )}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
