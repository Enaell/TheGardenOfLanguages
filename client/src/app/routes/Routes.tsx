import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LandingPage } from './LandingPage';

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};
