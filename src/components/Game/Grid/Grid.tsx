import { generateArray } from "../../../helpers/genericHelper";
import GridRow from "./GridRow"

interface GridProps {
  word: string
  guess: Array<Array<string>>
  currentRow: number
  guessStates: Array<Array<string>>
}

const Grid = (props: GridProps) => {
  const { word, guess, currentRow, guessStates } = props;
  return (
    <div className="flex flex-col gap-1">
      {
        generateArray(6).map((element, index) => (
          <GridRow key={index} word={word} guess={guess} gridRow={index} currentRow={currentRow} guessStates={guessStates}/>
        ))
      }
    </div>
  )
}

export default Grid