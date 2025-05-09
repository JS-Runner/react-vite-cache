import type { RouteObject } from 'react-router';
import { lazy, Suspense } from 'react';
import App from './App.tsx';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ErrorPage = lazy(() => import('./pages/ErrorPage.tsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.tsx'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense>
        <App />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
