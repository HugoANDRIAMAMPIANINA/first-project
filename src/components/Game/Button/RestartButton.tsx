interface ReplayButtonProps {
  askNewWord: () => void
}

const ReplayButton: React.FC<ReplayButtonProps> = ({ askNewWord }) => {
  return (
    <button className="mt-16 w-56 h-16 bg-blue-500 dark:text-white rounded-lg text-2xl" onClick={() => askNewWord()}>Nouvelle Partie</button>
  );
};

export default ReplayButton;