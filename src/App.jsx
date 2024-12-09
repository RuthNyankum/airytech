import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/rootLayout';
import Home from './pages/home/index';
import About from './pages/about/index';
import Portfolio from './pages/potfolio/index';
import DesignPortfolio from './pages/potfolio/design/index';
import WebsitePortfolio from './pages/potfolio/website/index';
import Services from './pages/services/index';
import Blog from './pages/blog/index';
import Contact from './pages/contact/index';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'about-us',
          element: <About />,
        },
        {
          path: 'portfolio',
          element: <Portfolio />,
          children: [
            {
              index: true,
              element: <Portfolio />,
            },
            {
              path: 'design',
              element: <DesignPortfolio />,
            },
            {
              path: 'website',
              element: <WebsitePortfolio />,
            },
          ],
        },
        {
          path: 'services',
          element: <Services />,
        },
        {
          path: 'blog',
          element: <Blog />,
        },
        {
          path: 'contact-us',
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
