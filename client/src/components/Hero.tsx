import React from "react";
import car_p2 from "../assets/car_p2.png";
import { assets, cityList } from "../assets/assets.ts";

const Hero = () => {
  const [recupLocation, setRecupLocation] = React.useState("");
  return (
    <div className="h-screen md:pt-6 flex flex-col items-center justify-center bg-light text-center">
      <h1 className="flex flex-nowrap flex-col text-4xl md:text-5xl font-semibold">
        <span className="flex-nowrap">Voitures d'élite,</span>{" "}
        <span className="flex-nowrap">Expériences Inégalables</span>
      </h1>

      <form className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-lg ">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8">
          {/* Adresse de récupération */}
          <div className="flex flex-col items-start gap-2">
            <select
              required
              value={recupLocation}
              onChange={(e) => setRecupLocation(e.target.value)}
            >
              <option value="">Adresse de récupération</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className="px-1 text-sm text-gray-500">
              {recupLocation
                ? recupLocation
                : "Veuillez sélectionner une ville"}
            </p>
          </div>

          {/* Date de récupération */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="recupDate" className=" ">
              Date de récupération
            </label>
            <input
              type="date"
              required
              min={new Date().toISOString().split("T")[0]} // Empêcher la sélection de dates passées
              className="text-sm text-gray-500"
              id="recupDate"
            />
          </div>

          {/* Date de retour */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="returnDate" className=" ">
              Date de retour
            </label>
            <input
              type="date"
              required
              className="text-sm text-gray-500"
              id="returnDate"
            />
          </div>

          {/* Bouton de recherche */}
          <div className="flex items-center">
            <button
              type="submit"
              className="flex items-center justify-center gap-1 mx-auto  px-9 py-3 bg-gray-900 text-white rounded-full cursor-pointer hover:bg-gray-800 transition-all duration-300"
            >
              <img
                src={assets.search_icon}
                alt="chercher"
                className="brightness-300"
              />
              Rechercher
            </button>
          </div>
        </div>
      </form>
      <img
        src={car_p2}
        alt="Voiture principale"
        className="w-auto -mt-[100px] drop-shadow-2xl drop-shadow-gray-500 min-h-72"
      />
    </div>
  );
};

export default Hero;
