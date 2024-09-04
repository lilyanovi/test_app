import './card-item.css';
import type { TBook } from '../../types';

type CardItemProps = {
  book: TBook;
}

function CardItem ({book}: CardItemProps): JSX.Element {
  const { formats, authors, title} = book;

  return (
    <div className='card-item'>
      <div className='card-item__img'>
        <img  
          src={formats['image/jpeg']} 
          alt='name'
        />
      </div>
      <div>
        {Object.values(authors).map((author)=> 
          <p key={author.name}>{author.name}</p>
        )}
      </div>
      <h2>{title}</h2>
      <button className='card-item__read'>
        <a 
          href={formats['text/html']}
          target='_blank'
          rel="noopener noreferrer"
        >Read</a>
      </button>
    </div>
  )
}

export default CardItem;