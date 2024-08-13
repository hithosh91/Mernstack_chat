import Converation from "./Converation";
import Logout from "./Logout";
import Searchbar from "./Searchbar";

const Sidebar = () => {
  return (
    <div>
      <Searchbar />
      <div className="divider px-3"></div>
      <Converation />
      <Logout />
    </div>
  );
};

export default Sidebar;
