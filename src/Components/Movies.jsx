import React, { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Movies = ({ baseUrl, sectionTitle }) => {
  const [Data, setData] = useState([]);
  const api_key = "4dd41186db35c641b8d72159ead5f038";
  const scrollRef = useRef(null);

  const RightScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + 800,
        behavior: "smooth",
      });
    }
  };

  const LeftScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - 800,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}api_key=${api_key}`);
        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="movies-list relative">
        <h1 className="z-0 text-white font-bold text-2xl pl-6">
          {sectionTitle}
        </h1>

        <div
          ref={scrollRef}
          className="list-of-movies flex overflow-x-auto gap-3 p-3 no-scrollbar"
        >
          {Data.map((movie) => {
            return <MovieCard className="hover:z-10" movie={movie} />;
          })}
        </div>
        <p
          onClick={LeftScroll}
          className="opacity-0 hover:opacity-100 absolute top-[120px] left-[30px] z-10 cursor-pointer text-white text-3xl"
        >
          <FaArrowLeft />
        </p>
        <p
          onClick={RightScroll}
          className="opacity-0 hover:opacity-100 duration-100 absolute top-[120px] right-[30px] z-10 cursor-pointer text-white text-3xl"
        >
          <FaArrowRight />
        </p>
      </div>
    </>
  );
};

export default Movies;
