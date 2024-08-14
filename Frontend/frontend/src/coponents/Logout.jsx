import { CiLogout } from "react-icons/ci";
import { useLogout } from "../Hookes/useLogout";
const Logout = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <CiLogout onClick={logout} />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default Logout;
