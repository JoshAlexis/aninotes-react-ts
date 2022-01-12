import NavButton from './NavButton';

const Navbar = () => {
  return (
    <div className="flex items-center bg-green-200 bg-opacity-20 h-14 w-full shadow-md">
      <h1 className="font-bold text-gray-100 text-2xl ml-4">Aninotes</h1>
      <div className="flex pl-10 space-x-2 flex-grow justify-end">
        <NavButton to="/pixiv" title="pixiv" />
        <NavButton to="/illustrators" title="illustrators" />
        <NavButton to="/sauces" title="sauces" />
      </div>
    </div>
  );
};

export default Navbar;
