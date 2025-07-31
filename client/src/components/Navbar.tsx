import { Link, useLocation, useNavigate } from "react-router-dom";
import knlogo from "../assets/logosansbg.png";
import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";

const menuLinks = [
  { name: "Acceuil", path: "/" },
  { name: "Voitures", path: "/cars" },
  { name: "Mes réservations", path: "/bookings" },
];

interface NavbarProps {
  setShowLogin: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({setShowLogin}) => {
  // gérer l'ouverture/fermeture du menu sur mobile
  const [open, setOpen] = useState(false);
  // déclencher l'affichage du modal de connexion

  // Hooks de navigation et localisation pour déterminer la page active
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`flex items-center -py-4 justify-between px-6 md:px-16 lg:px-24 xl:px-32 text-gray-600 border-b border-borderColor relative transition-all duration-300 ease-in-out ${
        location.pathname === "/" && ""
      }`}
    >
      <Link to="/">
        <img src={knlogo} className="h-16 w-20 " alt="logo" /> 
      </Link>

      <div
        // Menu de navigation, s'affiche différemment selon la taille d'écran
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${
          location.pathname === "/" ? "bg-white" : "bg-white"
        } ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        {menuLinks.map((link, index) => {
          return (
            <Link to={link.path} key={index}>
              {link.name} 
            </Link>
          );
        })}

        <div className="hidden lg:flex items-center border-3 text-sm rounded-full px-4 border-borderColor max-w-56 focus-within:border-blue-500  transition-all duration-300">
          <input
            type="text"
            placeholder="Recherche ..."
            className="w-full bg-transparent py-1.5 outline-none placeholder-gray-500"
          />
          <FaSearch className="h-5 w-5 text-gray-500" />
          {/* Zone de recherche visible uniquement sur grands écrans */}
        </div>

        <div className="text-sm flex max-sm:flex-col items-start sm:items-center gap-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="cursor-pointer"
          >
            Dashboard 
          </button>

          <button
            onClick={() => setShowLogin(true)}
            className="cursor-pointer hover:bg-gray-950 px-4 py-2 bg-gray-900 text-white rounded-lg transform transition-all duration-300 hover:scale-105"
          >
            Connexion {/* Bouton ouvrant le modal de connexion */}
          </button>
        </div>
      </div>

      {/* Icône pour activer/désactiver le menu mobile */}
      <div className="flex sm:hidden relative z-50">
        <button aria-label="Menu" onClick={() => setOpen(!open)} className="p-2">
          {open ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
