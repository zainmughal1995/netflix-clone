import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const MovieCard = ({ movie }) => {
  console.log(movie);

  return (
    <div className="shrink-0 relative pt-[30px] hover:scale-125 duration-300 hover:z-10 group">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        className="w-[200px] h-[120px]"
      />
      {/* This part is not working because I cannot bring the card detail at the top without affecting surrounding */}
      <p className="w-[300px] hover:z-10 hidden text-white bg-gray-900 pb-[30px] border border-black shadow group-hover:z-10 hover:block  transition-all duration-300 ">
        <div className="first-row flex justify-between mt-[10px]">
          <div className="playback-options flex gap-3 mt-3 ml-3">
            <div className="button-border w-[30px] p-2 h-[30px] rounded-full flex cursor-pointer items-center justify-center bg-white">
              <FaPlay className="text-gray-900" />
            </div>

            <div className="button-border w-[30px] p-2 h-[30px] border border-white rounded-full flex cursor-pointer items-center justify-center bg-gray-900">
              <FaPlus className="text-white" />
            </div>

            <div className="button-border w-[30px] border border-white p-2 h-[30px] rounded-full flex cursor-pointer items-center justify-center bg-gray-900">
              <FaRegThumbsUp className="text-white" />
            </div>
          </div>
          <div className="more-info gap-3 mt-3 mr-3">
            <div className="button-border w-[30px] border border-white p-2 h-[30px] rounded-full flex cursor-pointer items-center justify-center bg-gray-900">
              <FaAngleDown className="text-white" />
            </div>
          </div>
        </div>
        <div className="movie-info mt-[20px] text-sm">New 18+ 1h 45m HD</div>
        <div className="movie-category mt-[10px]">
          <ul className="flex gap-3">
            <li>Suspenseful</li>
            <li>Action</li>
            <li>Adventure</li>
          </ul>
        </div>
      </p>
    </div>
  );
};

export default MovieCard;
