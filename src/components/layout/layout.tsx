import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Navigation from '../navigation/navigation';
import './layout.css'

function Layout (): JSX.Element {
  return (
    <div className='layout'>
      <Header/>
      <Outlet/>
      <Navigation/>
    </div>
  )
}

export default Layout;
