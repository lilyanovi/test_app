import { COUNT_VISIBLE_CARDS } from './const';
import type { TBook } from './types';

export const getNewVisibleBooks = (books: TBook[], visibleBooksCount: number) => books.slice(0, visibleBooksCount + COUNT_VISIBLE_CARDS);