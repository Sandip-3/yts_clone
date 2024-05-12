import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { movieDetails } from "../../apis/movieDetails";
import { Movie } from "../../types/movieTypes";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { suggestionMovies } from "../../apis/suggestionMovies";
import YouTube from "react-youtube";
import { GoPlay } from "react-icons/go";

const MovieDetail = () => {
  const { id } = useParams();
  const movieId = id?.toString();
  const [movieData, setMovieData] = useState<Movie | null>(null);
  const [movieSuggest, setMovieSuggest] = useState([]);

  const [showPlayer, setShowPlayer] = useState(false);

  const togglePlayer = () => {
    setShowPlayer(!showPlayer);
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    movieDetails(movieId).then((response) => {
      const movie: Movie = response.data.data.movie;
      setMovieData(movie);
    });

    suggestionMovies(movieId).then((response) => {
      const movie: any = response.data.data.movies;
      setMovieSuggest(movie);
    });
  }, [movieId]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={` h-auto bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${movieData.background_image_original})` }}
    >
      <div className="bg-[#00000066] h-full">
        <div className=" flex ml-[135px]  pt-[40px] px-[15px] pb-[30px]">
          <div className="px-[15px] flex flex-col">
            <div className="image_container rounded-md border-[5px] border-white h-[390px] w-[262.5px]">
              <img
                className="h-full w-full"
                src={movieData.medium_cover_image}
                alt="moiveImage"
              />
            </div>
            <button className="mt-[10px] text-xl font-medium cursor-pointer text-white flex items-center justify-center gap-4 bg-[#6AC045] rounded-md py-[7px]  hover:bg-opacity-90">
              <PiDownloadSimpleBold size={25} />
              Download
            </button>
            <button className="mt-[10px] text-xl cursor-pointer font-medium text-white flex items-center justify-center gap-4 bg-[#00FFE7A3] rounded-md py-[7px]  hover:bg-opacity-90">
              Watch Now
            </button>
          </div>
          <div className="flex flex-col ml-[58.5px] w-[438px]  px-[15px] text-white">
            <h1 className="text-[40px] font-semibold">{movieData.title}</h1>
            <p className="text-[20px] font-medium">{movieData.year}</p>
            <p className="text-[20px] font-medium">{movieData.genres}</p>
            <div className="available_section flex flex-col justify-center mt-[30px] mb-[20px]">
              <div className="quality_section flex gap-2">
                <p className="text-[17.6px] font-thin">Available in: </p>
                <div className="border-[1px] cursor-pointer border-gray-600 hover:text-gray-400 bg-[#1B1B2366] text-[12.8px] rounded-md font-thin px-[12px] py-[5px]">
                  <p>720p.WEB</p>
                </div>
                <div className="border-[1px] cursor-pointer hover:text-gray-400 border-gray-600 bg-[#1B1B2366] text-[12.8px] rounded-md font-thin px-[12px] py-[5px]">
                  <p>1080p.WEB</p>
                </div>
              </div>
              <div className="">
                <p className="text-[13.2px] text-[#9C969C] font-medium">
                  WEB: same quality as BluRay
                </p>
              </div>
              <div className=" mt-8">
                <button className=" bg-[#1B1B2366] font-thin flex py-[.5px] px-1 gap-2 items-center border-[.5px] border-gray-600 rounded-md">
                  <PiDownloadSimpleBold className="text-[#6AC045]" size={25} />
                  Request Subtitles
                </button>
              </div>
              <div className="like_count mt-4 mb-[4px]">
                <p className="flex items-center gap-12 font-semibold">
                  <FaHeart className="text-[#6AC045]" size={20} />
                  {movieData.like_count}
                </p>
              </div>
              <div className="imdb_section mt-2 flex items-center gap-4">
                <div className="logo w-[75px]">
                  <img
                    className="cursor-pointer"
                    src="https://yts.mx/assets/images/website/logo-imdb.svg"
                    alt="logo"
                  />
                </div>
                <div className="rating_section flex items-center gap-3">
                  <p className="text-xl font-medium">
                    {movieData.rating}
                    <span className="text-sm text-[#9C969C] font-light">
                      /10
                    </span>
                  </p>
                  <p className="flex items-end">
                    <MdStar className="text-[#6AC045]" size={25} />
                    <span className="text-sm text-[#9C969C] font-light">
                      {movieData.runtime}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="similar_movies px-[15px] w-[369px] ml-12">
            <p className="text-[16px] text-white font-medium">Similar Movies</p>
            <div className="movie_card flex flex-2 flex-wrap gap-5">
              {movieSuggest.map((movie: any) => (
                <div className="image border-[5px] h-[148px] w-[102px] rounded-md hover:border-[#6AC045] hover:transform hover:duration-700">
                  <Link to={`/details/${movie.id}`}>
                    <img
                      className="w-full h-full"
                      src={movie.medium_cover_image}
                      alt=""
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-white flex items-center justify-center">
          <div>
            <div
              className="relative"
              style={{ width: "300px", height: "200px" }}
              onClick={togglePlayer}
            >
              <img
                src={movieData.background_image}
                alt="Play"
                className="cursor-pointer"
              />
              <div className="absolute top-[20%] left-[35%] text-white">
                <GoPlay size={80} />
              </div>
            </div>
            {showPlayer && (
              <div
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 bg-black bg-opacity-75"
                onClick={togglePlayer}
              >
                <YouTube videoId={`${movieData.yt_trailer_code}`} opts={opts} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
