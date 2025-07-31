# React + TypeScript + Vite


# KNCars - Plateforme de location et vente de voiture

Une plateforme moderne de location de voitures faite avec React 19, Typescript et Tailwind
Le projet fournit une experience premium avec un design Responsive fait avec Tailwind

## 🚗 Vue globale

KNCars est une plateforme de location de voitures qui permet aux utilisateurs de rechercher, parcourir et réserver des véhicules en toute simplicité.

## 🛠️ Tech Stack

- **React** : 19.1.0 (Dernière version)
- **TypeScript** : 5.8.3 (Typage statique et expérience de développement améliorée)
- **Vite** : 7.0.4 
- **Tailwind CSS** : 4.1.11 (Framework CSS)
- **React Router DOM** : 7.7.0 (Routage côté client)
- **React Icons** : 5.5.0 (Bibliothèque d’icônes)
- **Lucide React** : 0.525.0 (icônes suppl)

## 📦 Installation & Setup

1. **Cloner le repository**

Pour cloner mon repo et tester le projet, vous faites:
   ```bash
   git clone https://github.com/BigmanBigdrop/kn_cars.git
   cd KNcars/client
   ```

2. **Install dependencies**

Ensuite vous installez les dépendances
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**

Lancez le serveur de développement pour voir l'application en mode dev :

   ```bash
   npm run dev
  ```
  4. **Le build pour la production**

  Pour générer une version optimisée de l’application pour la production :

    ```bash
    npm run build
  ```
   

## ✅ Fonctionnalités Implémentées

- Page d'accueil avec composant Hero et recherche de véhicules
- Navigation responsive avec menu mobile et intégration React Router
- Section Hero avec formulaire de recherche, sélection de ville et gestion des dates
- Gestion centralisée des données dans assets.ts (villes, voitures, liens) de facon statique d'abord avec TypeScript
- Routage complet avec détection de chemin propriétaire
- Architecture avec composants réutilisables et typés
- Design responsive et moderne avec Tailwind CSS
- Intégration stricte de TypeScript pour la sécurité du code
- Scripts de développement, build, lint et preview disponibles
- ESLint configuré pour garantir la qualité et la cohérence du code

### 🏠 Page d'acceuil (`src/pages/Home.tsx`)

- **Statut**: ...En cours
- **Features**: Hero section avec texte <h1> et formulaire pour la recherche de vehicules

### 🧭 Navbar (`src/components/Navbar.tsx`)

- **Statut** : ✅ Terminé partiellement(A modifier)
- **Features**:
  - Design responsive avec menu mobile
    - Affichage du logo KNcars
    - Liens de navigation (Accueil, Voitures, Mes Réservations)
    - Menu hamburger pour les appareils mobiles
    - Intégration avec React Router

### 🎯 Hero (`src/components/Hero.tsx`)

- **Statut** : ✅ À modifier
- **Fonctionnalités** :
  
  - Formulaire de recherche de voiture
    - Menu déroulant pour la sélection de la ville
    - sélection de dates (prise en charge / retour)
    - Gestion de l’état du formulaire avec les hooks React
    - Design responsive
    - Intégration avec les données des assets pour ne pas bourrer les fichiers

### 📊 Gestion des données (`src/assets/assets.ts`)

- **Statut** : ✅ Terminé
- **Fonctionnalités** :
  - Exportation des assets typés avec TypeScript
  - Liste des villes pour le menu déroulant de localisation
  - Données fictives de voitures avec des objets
  - Liens du menu propriétaire
  - But: Centralisation de la gestion des données

### 🛣️ Routage (`src/App.tsx`)

- **Statut** : ✅ Terminé
- **Fonctionnalités** :
  - Configuration de React Router DOM
  - Définition des routes pour toutes les pages
  - Affichage conditionnel de la barre de navigation
  - Logique de détection du chemin propriétaire


## 📈 Prochaines etapes

1. Implémenter une page de liste des voitures avec filtres
2. Créer une vue détaillée pour chaque voiture avec fonctionnalité de réservation
3. Ajouter un système d’authentification utilisateur
4. Mettre en place la gestion des réservations
5. Intégrer une API backend
6. Améliorer l’interface avec des animations et transitions en fin de projet

---
