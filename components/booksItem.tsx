import Link from "next/link";
import { BooksItemProps } from "../types/types";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const BooksItem: React.FC<BooksItemProps> = ({ book, pageNumber }) => {
  return (
    <div>
      <Link href={`/books/${pageNumber}/${book.id}`}>
        <div>
          <img className="w-full" alt="books" src={book.coverImage} />
        </div>
        <div className="text-left p-2">레이블라우스</div>
        <div className="p-2 flex justify-between">
          <span className="text-red-500 font-bold "> {book.discountRate}%</span>
          <div>
            <span className={`${roboto.className} font-semibold text-fColor`}>
              57,600
            </span>
            <span>원</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BooksItem;
