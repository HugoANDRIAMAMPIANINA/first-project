interface KeyboardRowProps {
  letters: string
  onInput: (input:string) => void
}

const KeyboardRow = (props: KeyboardRowProps) => {
  const { letters, onInput } = props;
  return (
    <div className="flex flex-row items-center gap-2">
      {
        Array.from(letters).map((letter:string, index) =>(
          <button key={index} className="w-14 h-14 rounded-md border-2 border-black dark:border-white dark:text-white dark:hover:bg-gray-700" onClick={() => onInput(letter)}>{letter}</button>
        ))
      }
    </div>
  )
}

export default KeyboardRow