import { useEffect, useState } from 'react';
import Grid from './Grid/Grid'
import Keyboard from './Keyboard/Keyboard'
import ReplayButton from './Button/RestartButton';

const Game = () => {
  const [needNewWord, setNeedNewWord] = useState(true)

  const [randomWord, setRandomWord] = useState("")
  const [currentRow, setCurrentRow] = useState(0);
  const [guess, setGuess] = useState<string[][]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [guessStates, setGuessStates] = useState<string[][]>([[]]);
  // const [loading, setLoading] = useState(true);

  const handleKeyboardInput = (input: string) => {
    if (input === "⏎") {
      if (guess[currentRow].length === randomWord.length) {
        if (currentRow < 5) {
          setCurrentRow(currentRow + 1);
          setGuess([...guess, [randomWord.charAt(0)]]);
        }

        const guessStatesToAdd: string[] = []
        guess[currentRow].forEach((letter, index) => {
          if (letter === randomWord.charAt(index)) {
            guessStatesToAdd.push("red");
          } else if (randomWord.includes(letter)) {
            guessStatesToAdd.push("yellow");
          } else {
            guessStatesToAdd.push("blue");
          }
        });
        setGuessStates([...guessStates.slice(0, -1), guessStatesToAdd, []])

        if (guessStatesToAdd.every((str) => str === "red")) {
          setGameOver(true)
          setIsWin(true)
        }

        if (currentRow === 5 && gameOver !== true) {
          setGameOver(true);
        }
      }
    } else if (input === "⌫") {
      if (guess[currentRow].length > 1) {
        const updatedRow = guess[currentRow].slice(0, -1);
        const newGuess = [...guess];
        newGuess[currentRow] = updatedRow;
        setGuess(newGuess);
      }
    } else {
      if (guess[currentRow].length < randomWord.length) {
        const updatedRow = [...guess[currentRow], input];
        const newGuess = [...guess];
        newGuess[currentRow] = updatedRow;
        setGuess(newGuess);
      }
    }
  };

  const askNewWord = (): void => {
    setNeedNewWord(true)
  };
  
  const fetchApi = async () => {
    const response = await fetch("https://trouve-mot.fr/api/sizemax/8")
    const data = await response.json()
    const word = data[0].name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()
    console.log(word)
    setRandomWord(word)
    setGuess([word.charAt(0)])
    setCurrentRow(0)
    setIsWin(false)
    setGuessStates([[]])
    setGameOver(false)
  }

  useEffect(() => {
    if (needNewWord) {
      fetchApi()
      setNeedNewWord(false)
    }
  }, [needNewWord])

  return (
    <>
      {gameOver ? (
        <div className='p-16 flex flex-col items-center gap-8'>
          {isWin ? <h1 className='text-6xl font-semibold text-green-500'>{"Gagné"}</h1> : <h1 className='text-6xl font-semibold text-red-500'>{"Perdu"}</h1> }
          <h1 className='text-6xl text-black-500 dark:text-white'>{`Le mot était : ${randomWord}`}</h1>
          <ReplayButton askNewWord={askNewWord}/>
        </div>
      ) : (
        <div className='flex flex-col items-center gap-8'>
          <Grid word={randomWord} guess={guess} currentRow={currentRow} guessStates={guessStates}/>
          <Keyboard onInput={handleKeyboardInput}/>
        </div>
      )}
    </>
  )
}

export default Game