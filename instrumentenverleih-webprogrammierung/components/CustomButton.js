function CustomButton({ buttonText, buttonFunction }) {
  return (
    <button
      role="button"
      type="button"
      className="m-3 bg-white rounded-xl h-8 w-11/12 self-center group cursor-pointer transition duration-200 ease-in transform hover:z-100 sm:hover:scale-200"
      onClick={(e) => {
        e.preventDefault();
        buttonFunction();
        return;
      }}
    >
      <span className="text-lg text-black group-hover:font-medium">
        {buttonText}
      </span>
    </button>
  );
}

export default CustomButton;
