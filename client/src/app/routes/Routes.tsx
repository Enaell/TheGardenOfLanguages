import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}
