import { Link } from 'react-router-dom';

type NavButtonProps = {
  title: string,
  to: string
};

const NavButton = ({ title, to }: NavButtonProps) => {
  return (
    <Link
      to={to}
      className="md:w-28 text-center px-2 py-1 transform transition duration-200 ease-out
    text-gray-100 font-semibold text-lg"
    >
      {title}
    </Link>
  );
};

export default NavButton;
