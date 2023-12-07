import React from "react";

function GuessInput({ addGuess }) {
  const [input, setInput] = React.useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        console.log(input);
        addGuess(input);
        setInput("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={input}
        id="guess-input"
        type="text"
        onChange={(event) => {
          setInput(event.target.value.toUpperCase());
        }}
        required={true}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
      />
    </form>
  );
}

export default GuessInput;
