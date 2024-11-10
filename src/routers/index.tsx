import PublicLayout from '../layouts/PublicLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SingInPage from '../features/auth/singIn';
import SingUpPage from '../features/auth/singUp';
import AdminLayout from '../layouts/AdminLayout';
import PublicLayoutUser from '../layouts/PublicLayoutUser';
import NotFound from '../features/misc/NotFound';
import Forbidden from '../features/misc/Forbidden';
import ManageTour from '../features/admin/manageTour';


function RouterComponent() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayoutUser />,
      children: [
{
          index: true,
          element: <>Main Page</>
        },
        // {
        //   path: '/tour',
        //   element: <TourCOmponent />
        // },
      ]
    },
    {
      path: "/login",
      element: <PublicLayout />,
      children: [
        {
          index: true,
          element: <SingInPage />
        },
        {
          path: "sing-up",
          element: <SingUpPage />,
        },
      ]
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <>Layout admin page</>
        },
        {
          path: "manage-users",
          element: <>Manage user</>
        },
        {
          path: "manage-tour",
          element: <ManageTour />
        },
      ]
    },
    {
      path: "/Forbidden",
      element: <Forbidden />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default RouterComponent
