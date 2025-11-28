export default function AddTab({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        bg-[#121826] text-white px-3 py-1 rounded-sm 
        hover:bg-[#1b2433]
        dark:bg-white dark:text-black 
        dark:hover:bg-gray-200
      "
    >
      +
    </button>
  );
}
