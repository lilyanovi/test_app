import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import { Helmet } from 'react-helmet-async';

function NotFoundPage () {
  return (
    <main  className='container'>
      <Helmet>
        <title>Cтраница не найдена</title>
      </Helmet>
      <div>
        <section>
          <div>
            <h1>404 Not Found</h1>
            <Link to={AppRoute.Main}>Go to home page</Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default NotFoundPage;
