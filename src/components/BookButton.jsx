const BookButton = ({ className }) => {
  return (
    <button
      className={`${className} p-3 w-40 bg-orange-500 text-white rounded-tl-2xl rounded-tr rounded-br-2xl rounded-bl font-david font-medium  text-xl shadow-3xl`}>
      Book a table
    </button>
  );
};

export default BookButton;
