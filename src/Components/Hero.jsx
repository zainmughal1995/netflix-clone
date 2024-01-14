import heroBanner from "./../Assets/hero-banner.jpg";
import heroTitle from "./../Assets/john-wick-title.png";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Hero = () => {
  return (
    <div className="hero max-h-[650px]">
      <img className="w-full h-screen object-cover" src={heroBanner}></img>
      <div className="movie-details w-[93%] absolute top-[250px] left-[52px] w-1/2 pb-[15px]">
        <div className="movie-title pb-[10px] w-1/2">
          <img src={heroTitle}></img>
        </div>
        <div className="movie-description text-white w-1/2 pb-[15px]">
          <h2 className="text-2xl font-bold pb-[10px]">
            Last Day to Watch on Netflix: January 31
          </h2>
          <p>
            John Wick uncovers a path to defeating The High Table. But before he
            can earn his freedom, Wick must face off against a new enemy with
            powerful alliances across the globe and forces that turn old friends
            into foes.
          </p>
        </div>
        <div className="buttons text-white flex gap-3">
          <button className="flex items-center justify-center gap-3 text-gray-900 bg-white w-[120px] h-[45px] rounded-md text-lg font-bold hover:bg-gray-400">
            <FaPlay />
            Play
          </button>
          <button className="flex items-center justify-center gap-3 text-white bg-gray-600 bg-opacity-70 w-[170px] h-[45px] rounded-md text-lg font-bold hover:bg-gray-700 hover:bg-opacity-60">
            <IoMdInformationCircleOutline />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
