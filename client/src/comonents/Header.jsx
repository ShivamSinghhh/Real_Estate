import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex">
            {" "}
            <span className="text-slate-500">Rajputra</span>
            <span className="text-slate-700">Construction</span>
          </h1>{" "}
        </Link>
        <form className="bg-slate-100 p-3 flex items-center rounded-lg">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus:outline-none  w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex text-slate-700 font-semibold gap-4">
          <Link to={"/"}>
            <li className="hidden sm:inline hover:underline">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline hover:underline">About</li>
          </Link>
          <Link to={"/sign-in"}>
            <li className="hover:underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
