import React, { useRef, useCallback } from "react";

import { bookProps } from "../../types/types";

import BooksItem from "../../components/booksItem";
import { Noto_Sans } from "@next/font/google";
import { useRecoilState } from "recoil";
import useBookSearch from "../../hooks/useBookSearch";
import { pageNumberState } from "../../atoms";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
});

const BooksList = () => {
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);
  const { books, hasMore, error, loading } = useBookSearch(pageNumber);

  const observer = useRef<IntersectionObserver | null>();
  const lastBookElementRef = useCallback(
    (node: Element | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, loading]
  );

  return (
    <div className={` ${noto.className}`}>
      <h1 className="mt-5 mb-5 text-3xl font-bold text-center text-bookColor">
        Books
      </h1>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:p-[5%]">
        {books.map((book: bookProps, index) => {
          if (books.length === index + 1) {
            return (
              <div ref={lastBookElementRef} key={book.id}>
                <BooksItem book={book} pageNumber={pageNumber} />;
              </div>
            );
          } else {
            return (
              <BooksItem book={book} key={book.id} pageNumber={pageNumber} />
            );
          }
        })}
      </div>

      <div className="text-center">{loading && "loading..."}</div>
      <div>{error && "error"}</div>
    </div>
  );
};

export default BooksList;
