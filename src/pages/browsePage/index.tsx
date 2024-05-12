import { useState } from "react";
import Card from "../../components/card";

const BrowsePage = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [sendSearch, setSendSearch] = useState<string>("");

  const quality = ["All", "480p", "720p", "1080p", "1080p.x265", "2160p", "3D"];
  const genre = [
    "All",
    "action",
    "adventure",
    "animation",
    "biography",
    "comedy",
    "crime",
    "documentary",
    "drama",
    "family",
    "fantasy",
    "game-show",
    "film-noir",
    "history",
    "horror",
    "music",
    "musical",
    "mystery",
    "news",
    "reality-tv",
    "romance",
    "sci - fi",
    "sport",
    "talk-show",
    "thriller",
    "war",
    "western",
  ];
  const caputureSearch = (e: any) => {
    setSearchText(e.target.value);
  };
  const handleClick = (e: any) => {
    e.preventDefault();
    setSendSearch(searchText)
  };
  console.log(searchText);
  return (
    <>
      <div className="search_section py-[50px] bg-black flex items-center justify-center gap-8">
        <form onSubmit={handleClick}>
          <p className="text-[#5A5A5A] text-[21.6px] font-semibold mb-[10px]">
            Search Term:
          </p>
          <div className="flex gap-6">
            <input
              className="p-[10px] w-[880px] h-[40px] bg-[#282828] text-white outline-none rounded-sm"
              type="text"
              onChange={caputureSearch}
            />
            <button
              onClick={handleClick}
              className="py-[7px] px-6 text-white rounded-sm w-[100px] bg-[#6AC045]"
            >
              Search
            </button>
          </div>
          <div className="select_container flex text-white">
            <div className="mt-[15px] mr-[20px] flex flex-col">
              <p className="text-[14.4px] text-[#5A5A5A] font-medium mb-[10px]">
                Quality:
              </p>
              <select className="text-[#A2A2A2] bg-[#282828] pl-[10px] w-[130px] h-[40px] outline-none">
                {quality.map((qua, index) => (
                  <option id={index.toString()} value={qua}>
                    {qua}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-[15px] mr-[20px] flex flex-col">
              <p className="text-[14.4px] text-[#5A5A5A] font-medium mb-[10px]">
                Genre:
              </p>
              <select
                id=""
                className="text-[#A2A2A2] bg-[#282828] pl-[10px] w-[130px] h-[40px] outline-none"
              >
                {genre.map((gen, index) => (
                  <option id={index.toString()} value={gen}>
                    {gen}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-[15px] mr-[20px] flex flex-col">
              <p className="text-[14.4px] text-[#5A5A5A] font-medium mb-[10px]">
                Rating:
              </p>
              <select
                id=""
                className="text-[#A2A2A2] bg-[#282828] pl-[10px] w-[130px] h-[40px] outline-none"
              >
                <option value="all">All</option>
              </select>
            </div>
            <div className="mt-[15px] mr-[20px] flex flex-col">
              <p className="text-[14.4px] text-[#5A5A5A] font-medium mb-[10px]">
                Year:
              </p>
              <select
                id=""
                className="text-[#A2A2A2] bg-[#282828] pl-[10px] w-[130px] h-[40px] outline-none"
              >
                <option value="all">All</option>
              </select>
            </div>
            <div className="mt-[15px] mr-[20px] flex flex-col">
              <p className="text-[14.4px] text-[#5A5A5A] font-medium mb-[10px]">
                Language:
              </p>
              <select
                id=""
                className="text-[#A2A2A2] bg-[#282828] pl-[10px] w-[130px] h-[40px] outline-none"
              >
                <option value="all">All</option>
              </select>
            </div>
            <div className="mt-[15px] mr-[20px] flex flex-col">
              <p className="text-[14.4px] text-[#5A5A5A] font-medium mb-[10px]">
                Order By:
              </p>
              <select
                id=""
                className="text-[#A2A2A2] bg-[#282828] pl-[10px] w-[130px] h-[40px] outline-none"
              >
                <option value="all">Latest</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <Card searchString={sendSearch?sendSearch : ""} />
    </>
  );
};

export default BrowsePage;
