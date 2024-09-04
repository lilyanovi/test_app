import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from '../../const';
import Layout from '../layout/layout';
import ChatPage from '../../pages/chat-page';
import FeedPage from '../../pages/feed-page';
import WeatherPage from '../../pages/weather-page';
import NotFoundPage from '../../pages/not-found-page';

const router = createBrowserRouter([
  {
    path: AppRoute.Main,
    element: <Layout/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: AppRoute.Main,
        element: <ChatPage/>
      },
      {
        path: AppRoute.Feed,
        element: <FeedPage/>
      },
      {
        path: AppRoute.Weather,
        element: <WeatherPage/>
      },
    ]
  },
  
]);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
  );
}

export default App;
