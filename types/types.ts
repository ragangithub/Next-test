export type bookProps = {
  title: string;
  description: string;
  discountRate: number;
  coverImage: string;
  price: number;
  id?: number;
};

export type books = bookProps[];

export type booksListProps = {
  books: books;
};

export type detailProps = {
  book: bookProps;
};

export interface BooksItemProps {
  book: bookProps;
  pageNumber: number;
}
