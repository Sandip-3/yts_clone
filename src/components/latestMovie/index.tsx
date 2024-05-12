import { useState, useEffect } from "react";
import { getLatestMovies } from "../../apis/latestMovies";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const LatestMovies = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLatestMovies()
      .then((response) => {
        const latestMoviesData = response.data.data.movies;
        setLatestMovies(latestMoviesData.slice(0, 8));
        setLoading(false);
      })
      .catch((error) => {
        console.error(`Error : ${error}`);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full bg-[#171717]">
      <div className="main w-[80%] mx-auto flex flex-col gap-6">
        <div className="text_section mt-4 flex justify-between">
          <h2 className="text-white text-[18.4px] font-medium">
            Latest YIFY Movies Torrents
          </h2>
          <li className="list-none text-[#919191] hover:text-white">
            <Link to={"/browse-movies"}>Browse All</Link>
          </li>
        </div>
        <div className="movie_card gap-x-12 flex flex-wrap">
          {loading ? (
            <p>Loading...</p>
          ) : (
            latestMovies.map((movie: any, index) => (
              <div
                key={index}
                className="group px-[15px] relative w-[250px] pb-4 "
              >
                <div className="border-4 overflow-hidden group-hover:border-[#6AC045] w-[230px]">
                  <div className="group-hover:opacity-20  duration-300   bg-white rounded-md">
                    <img
                      className=""
                      src={movie.medium_cover_image}
                      alt={`${movie.title} Poster`}
                    />
                  </div>
                </div>
                <div className="title_year">
                  <p className="text-white hover:text-[#919191]">
                    <a href="#" className="overflow-hidden text-ellipsis">
                      {movie.title}
                    </a>
                  </p>
                  <p className="text-[#919191] text-[13.6px]">{movie.year}</p>
                </div>
                <div className="absolute opacity-0 hover:opacity-100 hover:translate-y-0 hover:duration-700 hover:bg-opacity-100 top-0 h-full w-full">
                  <div className="flex flex-col gap-8 items-center justify-center mt-12">
                    <div className="flex flex-col items-center text-[#6AC045]">
                      <FaStar size={30} />
                      <p className="text-[25px] text-[#fff] font-semibold">
                        {movie.rating} / 10
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-[25px] text-[#fff] font-semibold">
                      {movie?.genres &&
                        movie.genres
                          .slice(0, 2)
                          .map((genre: any, index: any) => (
                            <p key={index}>{genre}</p>
                          ))}
                    </div>
                    <Link
                      to={`/details/${movie.id}`}
                      className="px-6 py-2 rounded-xl bg-[#6AC045] font-semibold text-white"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestMovies;
