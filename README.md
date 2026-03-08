# Booking UI -- React Frontend

## Overview

This project is the **frontend for the Slot Booking System** built using
**React with Vite**.\
It allows users to register, login, view slots and book them by
interacting with backend REST APIs.

The application manages state using **Redux Toolkit** and communicates
with the backend using **Axios**.

------------------------------------------------------------------------

## Tech Stack

-   React 18
-   Vite
-   Redux Toolkit
-   React Redux
-   React Router DOM
-   Axios
-   JWT Decode

------------------------------------------------------------------------

## Project Structure

booking-ui-react-vite

src\
├── api\
│ └── axios.js (Axios configuration)\
│\
├── pages\
│ ├── Login.jsx (Login page)\
│ ├── Signup.jsx (Signup page)\
│ └── Dashboard.jsx (Main dashboard)\
│\
├── redux\
│ ├── store.js (Redux store configuration)\
│ ├── authSlice.js (Authentication state)\
│ └── slotSlice.js (Slot booking state)\
│\
├── App.jsx (Routing configuration)\
└── main.jsx (Entry point)

index.html\
package.json\
vite.config.js

------------------------------------------------------------------------

## Features

### User Authentication

-   User signup
-   User login
-   JWT based authentication
-   Token decoding using jwt-decode

### Slot Management

-   Fetch available slots
-   Display slots on dashboard
-   Book slots through backend APIs

### State Management

Redux Toolkit is used for managing application state.

**authSlice** - Stores logged in user data - Handles login and logout
actions

**slotSlice** - Stores slot data - Handles slot booking updates

------------------------------------------------------------------------

## Routing

Routing is handled using **React Router DOM**.

Routes used:

/login -- User login page\
/signup -- User registration page\
/dashboard -- User dashboard

------------------------------------------------------------------------

## API Communication

Axios is used to communicate with backend APIs.

Example requests:

axios.get("/slots")\
axios.post("/login")\
axios.post("/book")

------------------------------------------------------------------------

## Installation

Clone the repository:

git clone `<repository-url>`{=html}

Move to project directory:

cd booking-ui-react-vite

Install dependencies:

npm install

------------------------------------------------------------------------

## Run the Application

Start the development server:

npm run dev

Application will run at:

http://localhost:5173

------------------------------------------------------------------------

## Build for Production

Create production build:

npm run build

Preview production build:

npm run preview

------------------------------------------------------------------------

## Backend Requirement

Make sure the backend server is running.

Example backend URL:

http://localhost:8081

------------------------------------------------------------------------

## Future Improvements

-   Better UI for slot display
-   Error handling for API failures
-   Loading indicators
-   Admin panel
-   Slot filtering and searching