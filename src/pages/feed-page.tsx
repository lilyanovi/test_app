import { Helmet } from 'react-helmet-async';
import Cards from '../components/cards/cards';

function FeedPage (): JSX.Element {
  return (
    <main  className='container'>
      <Helmet>
        <title>Feed</title>
      </Helmet>
      <Cards/>
    </main>    
  )
}

export default FeedPage;
