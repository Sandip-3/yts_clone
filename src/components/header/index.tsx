import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { searchMovies } from "../../apis/searchMovies";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchMovie, setSearchMovie] = useState([]);
  const navigate = useNavigate();
  const homeNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    searchMovies(searchText, 1)
      .then((response) => {
        const searchMov = response.data.data.movies;
        setSearchMovie(searchMov.slice(0, 5));
        console.log(searchMovie);
      })
      .catch((error) => {
        console.error(`Error : ${error}`);
      });
  }, [searchText]);
  return (
    <>
      <div
        className="header h-[60px] z-10 pt-[8px] border-b-[.5px] border-[#4e4d4d] top-0 sticky w-screen bg-[#1d1d1d]"
        onClick={() => setShowSearch(false)}
      >
        <div className="w-[90%] mx-auto flex justify-between items-center">
          <div className="logo w-[127px] h-[40px]">
            <img
              className="ml-[6.359px]"
              src="https://yts.mx/assets/images/website/logo-YTS.svg"
              alt="logo"
              onClick={homeNavigate}
            />
          </div>

          <div className="header_menus flex items-center gap-5">
            <div className="search_menu relative flex items-center px-2 text-[#919191] w-[250px] h-[35px] py-[4px] border-2 border-[#474747] rounded-full">
              <IoSearch size={15} />
              <input
                onChange={(e) => {
                  setSearchText(e.target.value);
                  console.log(searchText);
                  setShowSearch(true);
                  console.log(showSearch);
                }}
                type="text"
                placeholder="Quick search"
                className="outline-none bg-inherit pl-[8px] text-[.85em] font-semibold font-custom placeholder-[#919191]"
              />
            </div>
            <div className="flex absolute text-white top-[60px] z-10  flex-col">
              {searchMovie.map((movie: any) => (
                <div
                  className={
                    showSearch
                      ? ` w-[248px]  border-b-[.1px] border-gray-600  p-[10px] bg-[#1d1d1d] hover:bg-[#555555]`
                      : ` tranform duration-600 hidden`
                  }
                >
                  <div className="flex gap-4  ">
                    <img src={movie.small_cover_image} alt="" />
                    <div className="movie_tile flex flex-col gap-2">
                      <p className="text-white font-semibold text-sm">
                        {movie.title}
                      </p>
                      <p className="text-[#919191] text-sm">{movie.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="menu_list flex list-none gap-6 text-[#919191] font-custom font-semibold text-[.85em]">
              <li className="hover:text-white ">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="text-[#6AC045]">
                <a href="#">4K</a>
              </li>
              <li>
                <Link to={"/browse-movies"} className="hover:text-white ">
                  Trending
                </Link>
              </li>
              <li className="hover:text-white ">
                <Link to={"/browse-movies"}>Browse Movies</Link>
              </li>
            </div>
            <div className="login_register flex items-center gap-2 list-none text-white font-semibold text-[.85em] ">
              <li className="hover:text-[#919191] ">
                <a href="#">Login</a>
              </li>
              <p>|</p>
              <li className="hover:text-[#919191] ">
                <a href="#">Register</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
