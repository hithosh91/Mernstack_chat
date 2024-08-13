import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div>
      <form className="flex items-center gap-2">
        <input type="text" className="input input-bordered rounded-full" />
        <button className="btn btn-circle bg-sky-500 text-white">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
