import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootComponent from './components/RootComponent';
import { store } from './store'

import { Provider } from 'react-redux'

// Pages Import
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import OurWorksPage from './pages/OurWorksPage';
import TestimonialsPage from './pages/TestimonialsPage';
import GalleryPage from './pages/GalleryPage';
import CartPage from './pages/CartPage'
import ContactPage from './pages/ContactPage';

const myApplicationRoutes = createBrowserRouter([
  {
    path: '/',
    element: <RootComponent />,
    children: [
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/services',
        element: <ServicesPage />
      },
      {
        path: '/our-works',
        element: <OurWorksPage />
      },
      {
        path: '/testimonials',
        element: <TestimonialsPage />
      },
      {
        path: '/gallery',
        element: <GalleryPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/cart',
        element: <CartPage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <RouterProvider router={myApplicationRoutes}>
    </RouterProvider>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
