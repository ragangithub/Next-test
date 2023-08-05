import { useEffect } from "react";
import axios, { Canceler } from "axios";

import { bookProps } from "../types/types";
import { useRecoilState } from "recoil";
import { errorState, loadingState, hasMoreState, booksState } from "../atoms";

const useBookSearch = (pageNum: number) => {
  const [loading, setLoading] = useRecoilState(loadingState);
  const [error, setError] = useRecoilState(errorState);
  const [hasMore, setHasMore] = useRecoilState(hasMoreState);
  const [books, setBooks] = useRecoilState(booksState);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: Canceler;

    axios({
      method: "GET",
      url: "https://frontassignment.hyperhire.in",
      params: {
        page: pageNum,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setBooks((prev) => {
          let bookwithId = res.data.data.map((book: bookProps) => {
            const randomDecimal = Math.random();

            const randomId = Math.floor(randomDecimal * 9) + 1;

            return { ...book, id: randomId };
          });

          return [...prev, ...bookwithId];
        });
        setHasMore(res.data.data.length > 0);
        setLoading(false);
      })

      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();
  }, [pageNum]);
  return { loading, error, books, hasMore };
};

export default useBookSearch;
