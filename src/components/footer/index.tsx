import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#222121] w-full p-4  border-t-[.5px] border-[#4e4d4d]">
      <div className="w-[55%] mx-auto text-white flex items-center ">
        <div className="flex gap-6">
          <p>YTS © 2011 - 2024</p>
          <div className="flex list-none items-center gap-2 text-[13.6px] text-[#919191]">
            <li className="hover:text-white">
              <a href="#">- Blog</a>
            </li>
            <li className="hover:text-white">
              <a href="#">- DMCA</a>
            </li>
            <li className="hover:text-white">
              <a href="#">- API</a>
            </li>
            <li className="hover:text-white">
              <a href="#">- RSS</a>
            </li>
            <li className="hover:text-white">
              <a href="#">- Contact</a>
            </li>
            <li className="hover:text-white">
              <Link to={"/browse-movies"}>Browse Movies</Link>
            </li>
            <li className="hover:text-white">
              <a href="#">- Requests</a>
            </li>
            <li className="hover:text-white">
              <a href="#">- Login</a>
            </li>
            <li className="hover:text-white">
              <a href="#">- Language</a>
            </li>
          </div>
        </div>
      </div>
      <div className="gap-4 flex justify-center text-[13.6px] list-none my-2   text-[#919191]">
        <li className="hover:text-white">
          <a href="#">- EZTV</a>
        </li>
        <li className="hover:text-white">
          <a href="#">- YIFY Status</a>
        </li>
        <li className="hover:text-white">
          <a href="#">- YTS Proxies</a>
        </li>
        <li className="hover:text-white">
          <a href="#">- YTS Proxies (TOR)</a>
        </li>
        <button className="font-medium flex bg-black px-2 rounded-xl text-white items-center gap-2">
          {" "}
          <FaXTwitter size={10} />
          Follow @ytsyify
        </button>
      </div>
      <div className="flex justify-center">
        <p className="text-white text-[12.8px] flex gap-1 font-light">
          By using this site you agree to and accept our
          <a className="text-[#919199] hover:text-white" href="">
            User Agreement
          </a>{" "}
          which can be{" "}
          <a className="text-[#919199] hover:text-white" href="">
            read here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
