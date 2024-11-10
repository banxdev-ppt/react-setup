import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { privateRoutes } from "@/routers/routes/privateRoutes/privateRoutes";
import { IRoutes } from "@/types/global";

export default function Navigation() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function onLogout() {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">
        Logo
      </div>

      <button onClick={() => setMenuOpen(!menuOpen)} className="px-4 py-2 bg-gray-600 rounded-lg">
        {menuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
      </button>

      {menuOpen && <div className="absolute right-4 top-16 bg-white text-black p-4 rounded-lg shadow-lg flex flex-col">
        {privateRoutes[0].children.map((route: IRoutes, index: number) =>
          <Link key={index} to={route.path} className="pb-2 hover:bg-gray-200">{route.name}</Link>
        )}
        <button type="button" onClick={onLogout}>ออกจากระบบ</button>
      </div>}

    </nav>
  );
}
