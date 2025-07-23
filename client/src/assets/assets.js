import logo from "./kn_logo.png"
const assets = () => {
  const leLogo = logo;

   const villes = ["Abidjan", "Yamoussoukro", "Bouaké", "Grand-Bassam"];

  const menuLinks = [
    { name: "Acceuil", path: "/" },
    { name: "Voitures", path: "/cars" },
    { name: "Mes réservations", path: "/bookings" },
  ];

  const ownerLinks = [
    {
      name: "Dashboard",
      path: "/owner",
      icon: tableau2Bord,
      coloredIcon: tableau2BordCol,
    },
    {
      name: "Ajouter des Voitures",
      path: "/owner/add-car",
      icon: ajout,
      coloredIcon: ajoutCol,
    },
    {
      name: "Gérer les Voitures",
      path: "/owner/cars",
      icon: mesVoitures,
      coloredIcon: mesVoituresCol,
    },
    {
      name: "Gérer les Reservations",
      path: "/owner/bookings",
      icon: listIcon,
      coloredIcon: listCol,
    },
  ];

  const dummyUserData = {
    _id: "68f8b2c4d3e4f5a6b7c8d9e0f",
    name: "Romain Kouakou",
    email: "romkouakou@example.com",
    phone: "+225 01 23 45 67",
    role: "owner",
    image: profile,
  };

  const dummyCarData = [
    {
      _id: "68f8b2c4d3e4f5a6b7c8d9e8765",
      marque: "Toyota",
      model: "Corolla",
      categorie: "Sedan",
      year: 2020,
      places: 5,
      image: car1,
      prixParJour: 20000,
      localisation: "Abidjan",
      description:
        "Une voiture simple, fiable et très économique pour rouler en ville.",
      ownerId: "68f8b2c4d3e4f5a6b7c8d9e0f",
      available: true,
      createdAt: "2025-06-01T12:00:00Z",
    },
    {
      _id: "68f8b2c4d3e4f5a6b7c8d9e8766",
      marque: "Range Rover",
      model: "Velar",
      categorie: "SUV",
      year: 2021,
      places: 5,
      image: car2,
      prixParJour: 60000,
      localisation: "Yamoussoukro",
      description:
        "Un SUV spacieux et luxueux, parfait pour les longs trajets et les occasions spéciales.",
      ownerId: "68f8b2c4d3e4f5a6b7c8d9e0f",
      available: true,
      createdAt: "2025-06-01T12:00:00Z",
    },
    {
      _id: "68f8b2c4d3e4f5a6b7c8d9e8767",
      marque: "Mercedes-Benz",
      model: "C-Class",
      categorie: "Luxe",
      year: 2022,
      places: 5,
      image: car3,
      prixParJour: 45000,
      localisation: "Bouaké",
      description:
        "Une berline élégante et confortable, idéale pour les affaires et les voyages.",
      ownerId: "68f8b2c4d3e4f5a6b7c8d9e0f",
      available: true,
      createdAt: "2025-06-01T12:00:00Z",
    },
    {
      _id: "68f8b2c4d3e4f5a6b7c8d9e8768",
      marque: "Peugeot",
      model: "3008",
      categorie: "SUV",
      year: 2019,
      places: 5,
      image: car4,
      prixParJour: 25000,
      localisation: "Grand-Bassam",
      description:
        "Un SUV compact avec un design moderne et des fonctionnalités avancées.",
      ownerId: "68f8b2c4d3e4f5a6b7c8d9e0f",
      available: true,
      createdAt: "2025-06-01T12:00:00Z",
    },
    {
      _id: "68f8b2c4d3e4f5a6b7c8d9e8769",
      marque: "Renault",
      model: "Duster",
      categorie: "SUV",
      year: 2018,
      places: 5,
      image: car5,
      prixParJour: 18000,
      localisation: "Abidjan",
      description:
        "Un SUV robuste et abordable, parfait pour les aventures en plein air.",
      ownerId: "68f8b2c4d3e4f5a6b7c8d9e0f",
      available: true,
      createdAt: "2025-06-01T12:00:00Z",
    },
  ];

  const dummyBookingData = [
    {
      _id: "68f8b2c4d3e4f5a6b7c8d9e8795",
      userId: "68f8b2c4d3e4f5a6b7c8d9e0f",
      carId: dummyCarData[0]._id,
      startDate: "2025-06-10T12:00:00Z",
      endDate: "2025-06-15T12:00:00Z",
      status: "confirmed",
      totalPrice: 60000,
      createdAt: "2025-06-01T12:00:00Z",
    },
  ];
}
export default assets;