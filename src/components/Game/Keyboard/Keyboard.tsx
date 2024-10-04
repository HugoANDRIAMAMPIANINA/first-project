import KeyboardRow from "./KeyboardRow";

interface KeyboardProps {
  onInput: (input:string) => void
}

const Keyboard = (props: KeyboardProps) => {
  const { onInput } = props

  const firstRow = "AZERTYUIOP";
  const secondRow = "QSDFGHJKLM"
  const thirdRow = "WXCVBN⏎⌫"

  return (
    <div className="flex flex-col gap-2 items-center">
      <KeyboardRow letters={firstRow} onInput={onInput}/>
      <KeyboardRow letters={secondRow} onInput={onInput}/>
      <KeyboardRow letters={thirdRow} onInput={onInput}/>
    </div>
  )
}

export default Keyboard