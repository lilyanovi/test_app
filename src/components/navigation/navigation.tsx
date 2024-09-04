import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import './navigation.css'

function Navigation (): JSX.Element {
  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <nav className='container navigation'>
      <Link to={AppRoute.Main} className={`navigation__link${activeLink === AppRoute.Main ? ' active' : ''}`}>Chat</Link>
      <Link to={AppRoute.Weather} className={`navigation__link${activeLink === AppRoute.Weather ? ' active' : ''}`}>Weather</Link>
      <Link to={AppRoute.Feed} className={`navigation__link${activeLink === AppRoute.Feed ? ' active' : ''}`}>Feed</Link>
    </nav>
  )
}

export default Navigation;