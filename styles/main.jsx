import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Error from './pages/Error';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

// Define the routes for the application using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/', // Root path
    element: <App />, // Main App component
    errorElement: <Error />, // Error page component
    children: [
      {
        index: true, // Default route
        element: <About />, // About page component
      },
      {
        path: '/Contact', // Contact page path
        element: <Contact />, // Contact page component
      },
      {
        path: '/Portfolio', // Portfolio page path
        element: <Portfolio />, // Portfolio page component
      },
      {
        path: '/Resume', // Resume page path
        element: <Resume />, // Resume page component
      },
    ],
  },
]);

// Render the application using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> // Provide the router to the application
);