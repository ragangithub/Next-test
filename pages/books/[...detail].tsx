import axios from "axios";
import { bookProps, detailProps } from "../../types/types";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

import { Noto_Sans, Roboto } from "@next/font/google";

import Comment from "../../components/comment";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Detail = ({ book }: detailProps) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <div className={` ${noto.className} relative`}>
      <div>
        <h1 className="mt-5 mb-5 text-3xl font-bold text-center text-[20px]">
          {book.title}
        </h1>
        <div
          onClick={goBack}
          className="absolute top-2 left-4 text-[30px] cursor-pointer"
        >
          <BiArrowBack />
        </div>
      </div>

      <div className="h-[500px]">
        <img className="w-full h-full" alt="books" src={book.coverImage} />
      </div>
      <div className="p-2">
        <h2 className="mt-5 mb-5 text-3xl font-bold text-left text-[18px]">
          {book.title}
        </h2>
        <span> {book.description}</span>
        <p className="font-normal">
          Description of the book... Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <div className="p-2 flex justify-between items-center">
          <span className="text-red-500 font-bold "> {book.discountRate}%</span>
          <div>
            <span className={` text-fColor ${roboto.className} font-semibold `}>
              57,600원
            </span>
          </div>
        </div>
      </div>

      <div className="bg-lightColor h-[2.5px]  w-full"></div>
      <Comment />
    </div>
  );
};

export default Detail;

export const getServerSideProps: GetServerSideProps<{
  book: bookProps;
}> = async (context) => {
  const id = context.params?.detail?.[1];
  const page = context.params?.detail?.[0];
  const pageNumber = page?.slice(-1);
  let idNumber = parseFloat(`${id}`);

  const response = await axios.get(
    `https://frontassignment.hyperhire.in/?page=${pageNumber}`
  );

  return {
    props: {
      book: response.data.data[idNumber],
    },
  };
};
