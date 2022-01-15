import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-opacity-20 bg-green-200 rounded-md flex flex-col justify-center items-center p-12">
        <h1 className="text-gray-100 text-5xl m-4">Aninotes</h1>
        <div className="text-gray-100 text-lg mt-4">
          <Link className="w-24 m-2 hover:text-green-300" to="/pixiv">Pixiv</Link>
          <Link className="w-24 m-2 hover:text-green-300" to="/illustrators">Ilustrators</Link>
          <Link className="w-24 m-2 hover:text-green-300" to="/sauces">Sauces</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
