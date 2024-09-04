import './cards.css'
import { useCallback, useEffect, useState } from 'react';
import type { TBook } from '../../types';
import { URL } from '../../const';
import { getNewVisibleBooks } from '../../utils';
import { getBookList } from '../../services/api';
import CardItem from './card-item';
import Loader from '../loader/loader';

function Cards (): JSX.Element {
  const [books, setBooks] = useState<TBook []>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(URL.StartPage);
  const [visibleBooks, setVisibleBooks] = useState<TBook []>([]);
  const [visibleBooksCount, setVisibleBooksCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const changeVisibleBooks = useCallback(() => {
    const scrolledHeight = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (Math.ceil(scrolledHeight + viewportHeight) >= fullHeight) {
      setVisibleBooksCount(visibleBooks.length)
    }
  }, [visibleBooks.length]);

  useEffect(() => {
    document.addEventListener('scroll', changeVisibleBooks);
    document.addEventListener('resize', changeVisibleBooks);
        
    return function () {
      document.removeEventListener('scroll', changeVisibleBooks);
      document.removeEventListener('resize', changeVisibleBooks);
    };
  }, [changeVisibleBooks]);

  useEffect(() => {
    if(books){
      if((books.length === visibleBooksCount) && nextUrl){
        setIsLoading(true);
        getBookList(nextUrl)
          .then((response) => {
            if(response){
              setBooks([...books, ...response.results]);
              setNextUrl(response.next);
            }
           })
          .finally(() => {
            setIsLoading(false);
          }) 
            }
        const newVisibleBooks = getNewVisibleBooks(books, visibleBooksCount)
        setVisibleBooks(newVisibleBooks);
    }
  }, [books, visibleBooksCount, nextUrl])

  useEffect(() => {
    setIsLoading(true);
      getBookList(URL.StartPage)
        .then((response) => {
          if(response){
            setBooks(response.results);
            setNextUrl(response.next);
          }
        })
        .finally(() => {
          setIsLoading(false);
        })
  }, []);

  return (
    <>
      <div className="container cards">
        {visibleBooks.map((book) => <CardItem key={book.id} book={book}/>)}                 
      </div>
      {isLoading ? <Loader/> : ''}
    </>    
  )
}

export default Cards;

