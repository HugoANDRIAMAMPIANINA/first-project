interface GridBoxProps {
  letter: string
  letterState: string
}

const GridBox = (props: GridBoxProps) => {
  const { letter, letterState } = props;
  let gridBox;

  if (letterState === "yellow") {
    gridBox = (
      <div className="bg-blue-500 w-16 h-16 text-center border-2 border-black dark:border-white rounded-md text-2xl align-middle flex items-center">
        <div className="bg-yellow-300 w-full h-full dark:text-white rounded-full flex justify-center items-center">{letter}</div>
      </div>
    )
  } else if (letterState === "red") {
    gridBox = <div className="bg-red-500 w-16 h-16 text-center border-2 border-black dark:border-white dark:text-white rounded-md text-2xl align-middle flex justify-center items-center">{letter}</div>
  } else {
    gridBox = <div className="bg-blue-500 w-16 h-16 border-2 border-black dark:border-white dark:text-white rounded-md text-2xl flex justify-center items-center">{letter}</div>
  }

  return (
    <>{gridBox}</>
  )
}

export default GridBox