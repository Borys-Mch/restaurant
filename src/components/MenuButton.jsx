const MenuButton = ({ className }) => {
  return (
    <button
      className={`${className} p-3 mr-6 h-14 w-32 bg-[#101A24] text-white rounded-tl-2xl rounded-tr rounded-br-2xl rounded-bl font-david font-medium text-xl shadow-3xl`}>
      Menu
    </button>
  );
};

export default MenuButton;
