import { generateArray } from "../../../helpers/genericHelper";
import GridBox from "./GridBox";

interface GridRowProps {
  word: string
  guess: Array<Array<string>>
  gridRow: number
  currentRow: number
  guessStates: Array<Array<string>>
}

const GridRow = (props: GridRowProps) => {
  const { word, guess, gridRow, currentRow, guessStates } = props

  return (
    <div className="flex flex-row gap-1">
      {
        generateArray(word.length).map((element, index) => (
          gridRow <= currentRow ? <GridBox key={index} letter={guess[gridRow][index] || ""} letterState={guessStates[gridRow][index] || ""}/> : <GridBox key={index} letter={""} letterState={"blue"}/>
        ))
      }
    </div>
  )
}

export default GridRow

