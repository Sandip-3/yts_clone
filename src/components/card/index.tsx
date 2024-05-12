import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { getMovieList } from "../../apis/getMovies";
import { searchMovies } from "../../apis/searchMovies";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";
import { Link } from "react-router-dom";

interface SearcProps {
  searchString: string;
}

const Card = ({ searchString }: SearcProps) => {
  const [data, setData] = useState<{ movie_count: any; movies: any[] }>({
    movie_count: 0,
    movies: [],
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchString.trim() === "") {
      // If search string is empty, fetch movies
      getMovieList(page)
        .then((response) => {
          const Movies = response.data.data;
          setData(Movies);
        })
        .catch((error) => {
          console.error(`Error : ${error}`);
        });
    } else {
      // If search string is not empty, search for movies
      searchMovies(searchString, page)
        .then((response) => {
          const searchMov = response.data.data;
          setData(searchMov);
        })
        .catch((error) => {
          console.error(`Error : ${error}`);
        });
    }
  }, [page, searchString]);
  console.log(data);
  const handleClick = (pageNumber: any) => {
    setPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const startPage = Math.max(1, page - 2);
    const endPage = Math.min(startPage + 4, totalPages);

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`flex items-center text-[14px] justify-center text-white font-medium rounded-sm border py-2 px-4 border-slate-500 ${
            i === page ? "bg-[#6AC045]" : ""
          }`}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const totalPages = Math.ceil(data.movie_count / 20);
  console.log(data);
  return (
    <>
      <div className="w-full bg-[#171717] pb-12">
        <div className="main w-[80%] mx-auto flex flex-col gap-6">
          <div className="text_section mt-4 flex justify-center items-center">
            <h2 className="text-[#6AC045] text-[20.16px] font-sans">
              YIFY Movies {page > 2 ? `- Page Count - ${page} ` : ""}
            </h2>
          </div>
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setPage(1)}
              className={`${
                page > 3 ? "" : "hidden"
              } flex items-center text-[14px] justify-center text-white font-medium rounded-sm border py-2 px-4 border-slate-500`}
            >
              <TbPlayerTrackPrevFilled size={15} />
              First
            </button>
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              className={`${
                page > 1 ? "" : "hidden"
              } flex items-center text-[14px] justify-center text-white font-medium rounded-sm border py-2 px-4 border-slate-500`}
            >
              <TbPlayerTrackPrevFilled size={15} /> Previous
            </button>
            {renderPageNumbers()}
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              className={`${
                page < totalPages ? "" : "hidden"
              } flex items-center text-[14px] justify-center text-white font-medium rounded-sm border py-2 px-4 border-slate-500`}
            >
              Next <TbPlayerTrackNextFilled size={15} />
            </button>
          </div>
          <div className="movie_card gap-x-6 flex flex-wrap">
            {data.movies &&
              data?.movies.map((movie: any, index) => (
                <div
                  key={index}
                  className="group px-[15px] relative w-[200px] pb-4"
                >
                  <div className="border-4 overflow-hidden group-hover:border-[#6AC045] w-[200px]">
                    <div className="group-hover:opacity-20 duration-300 bg-white rounded-md">
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
                    <div className="flex flex-col gap-6 items-center justify-center mt-12">
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
                      <Link to={`/details/${movie.id}`} className="px-6 py-2 rounded-xl bg-[#6AC045] font-semibold text-white">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => setPage(1)}
            className={`${
              page > 3 ? "" : "hidden"
            } flex items-center text-[14px] justify-center text-white font-medium rounded-sm border py-2 px-4 border-slate-500`}
          >
            <TbPlayerTrackPrevFilled size={15} />
            First
          </button>
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            className={`${
              page > 1 ? "" : "hidden"
            } flex items-center text-[14px] justify-center text-white font-medium rounded-sm border py-2 px-4 border-slate-500`}
          >
            <TbPlayerTrackPrevFilled size={15} /> Previous
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            className={`${
              page < totalPages ? "" : "hidden"
            } flex items-center text-[14px] justify-center text-white font-medium rounded-sm border py-2 px-4 border-slate-500`}
          >
            Next <TbPlayerTrackNextFilled size={15} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
