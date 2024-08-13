import Conversations from "./Conversations";
import Logout from "./Logout";
import Searchbar from "./Searchbar";

const Sidebar = () => {
  return (
    <div className="bg-gray-500 p-4">
      <Searchbar />
      <div className="divider px-3"></div>
      <Conversations />
      <Logout />
    </div>
  );
};

export default Sidebar;
