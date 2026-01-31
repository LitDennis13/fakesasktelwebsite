import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./components/App/app.tsx"
import HomePage from "./components/HomePage/homePage.tsx"
import LoginPage from "./components/LoginPage/loginPage.tsx"
import MyPortal from "./components/MyPortal/myPortal.tsx"


import ErrorPage from './components/ErrorPage/errorPage.tsx';

import "./index.css"
import "./other/josh-comeau-css-reset.css"

const router = createBrowserRouter([
{
	path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
		{
			path: "/",
			element: <HomePage />,
		},
		{
			path: "/LoginPage",
			element: <LoginPage />,
		},
		{
			path: "/MyPortal",
			element: <MyPortal />,
		},
		{
			path: "*",
			element: <ErrorPage />,
		}
	]
}
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
