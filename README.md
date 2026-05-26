# Pokemon World

A modern React application built using the PokeAPI.
Users can search Pokemon, view matching search results, explore detailed Pokemon information, and view a random Pokemon card that changes daily.

---

# Features

* Search Pokemon by name
* Auto suggestion while typing
* Random Pokemon card on homepage
* Daily random Pokemon using localStorage
* Search results page
* Pokemon details page
* Responsive UI
* Back button navigation
* Loading state handling

---

# Tech Stack

* React JS
* React Router DOM
* CSS
* PokeAPI

---

# API Used

https://pokeapi.co/

---

# Folder Structure

src/
│
├── api/
│   └── poke.js
│
├── components/
│   ├── Card.jsx
│   ├── SearchBox.jsx
│   ├── Top.jsx
│   └── Wait.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Result.jsx
│   └── FullInfo.jsx
│
├── App.jsx
├── App.css
└── main.jsx

---

# Installation

Clone the repository

```bash
git clone YOUR_GITHUB_REPO_LINK
```

Move inside project folder

```bash
cd pokemon-world
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

---

# Build Project

```bash
npm run build
```

---

# Main Functionalities

## 1. Search Pokemon

Users can search Pokemon by typing names in the search box.

Example:

* pikachu
* charizard
* bulbasaur

---

## 2. Search Suggestions

While typing, matching Pokemon suggestions appear automatically.

---

## 3. Daily Pokemon Card

Homepage shows a random Pokemon card.

* Changes every day
* Does not change on refresh
* Stored using localStorage

---

## 4. Pokemon Details

Details page displays:

* Name
* Image
* Height
* Weight
* Experience
* Abilities
* Types

---

# Deployment

The project can be deployed using:

* Vercel
* Netlify

---

# Future Improvements

* Dark mode
* Pokemon type filter
* Pagination
* Favorites feature
* Better animations

---

# Author

Akash Pandit
