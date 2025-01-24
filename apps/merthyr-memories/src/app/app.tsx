import { Navigation } from '@nx-merthyr-memories/ui';
import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const SplashPage = lazy(() => import('../pages/SpashPage/SplashPage'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <SplashPage />,
  },
];

function App() {
  const element = useRoutes(routes);
  return (
    <div>
      <Navigation title="Merthyr Memories" links={[]} />
      <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
