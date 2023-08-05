import React from "react";

import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFileImage } from "react-icons/bs";

const Comment = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-1 ">
          <img src="/C.png" alt="profile" />
          <span>안녕 나 응애 </span>
          <img className="h-[20px] w-[20px]" src="/EXPERT_ICON.png"></img>
          <span>1일전</span>
        </div>
        <div className="text-mlightColor">
          <FiMoreHorizontal />
        </div>
      </div>
      <p className="mt-2 mb-1 pr-5 pl-8 text-nlightColor">
        어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
        아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가
        기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰
        올라온다고 하니 꼭 봐주세용~!
      </p>
      <div className="flex items-center pr-5 pl-8  text-hlightColor">
        <AiOutlineHeart />
        <span className="mr-1">5</span>
        <AiOutlineHeart />
        <span>5</span>
      </div>

      <div className="flex justify-between  pl-8 mt-3">
        <div className="flex">
          <img className="h-[30px] w-[30px]" src="/C@2x.png" alt="" />
          <span className="font-bold">ㅇㅅㅇ</span>
          <span className="text-hlightColor">1일전</span>
        </div>
        <div className="text-mlightColor">
          <FiMoreHorizontal />
        </div>
      </div>

      <div className="flex flex-col pl-14 mt-4">
        <span className="text-nlightColor">
          오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
        </span>

        <div className="flex items-center text-hlightColor">
          <AiOutlineHeart />5
        </div>
      </div>

      <div className=" mt-4 mb-4 bg-lightColor h-[2.5px]  w-full"></div>

      <div className="flex justify-between items-center mt-4 text-vlightColor">
        <div className="flex gap-6 items-center">
          <BsFileImage />
          <span>댓글을 남겨주세요.</span>
        </div>
        <span>등록</span>
      </div>
    </div>
  );
};

export default Comment;
