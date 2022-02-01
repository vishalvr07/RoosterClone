import React from "react";
import companyLogo from "../../assets/logo.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import NotBell from "../../assets/bell2.png";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function header() {
  return (
    <header className="flex items-center justify-between ml-4 pt-3">
      <div className="flex items-center ">
        <img
          className="rounded-md"
          src={companyLogo}
          height={"50px"}
          width={"50px"}
          alt="Rooster Inc. logo"
        />
        <span className="text-2xl hover:text-red-400 ml-3">Rooster App </span>
      </div>

      <div className="flex items-center border-2 border-gray-300">
        <input
          className=" w-96 h-8 bg-gray-300 "
          type="text"
          placeholder="    Search for candidates "
        />
        <AiOutlineSearch
          size={24}
          color="gray"
          className=" inline-block rounded  bg-gray-300 "
        />
      </div>

      <nav>
        <ul className="flex items-center">
          <li className="pr-6 hover:text-red-400">
            <a href="#">Jobs</a>
          </li>
          <li className="pr-4 hover:text-red-400">
            <a href="#">Status</a>
          </li>

          <li className="pr-4 ">
            {" "}
            {/* <img
              className="rounded-md hover:scale-150"
              src={NotBell}
              height={"30px"}
              width={"30px"}
              alt="bell"
            /> */}
            <div className="flex">
            <div className= "bg-red-500 p-1 rounded-full hover:scale-110 ">
              <NotificationsActiveIcon fontSize="large" sx={{ color:"#E9E3E2" }}/>
            </div>
            <div className="text-gray-300 h-5 w-4 rounded-full flex items-center justify-center -ml-2  bg-gray-600"> 2</div>
            </div>

          </li> 
          <li className="pr-6 hover:text-red-300">
            <a href="#">Contact</a>
          </li>
          <li className="pr-6 hover:text-red-300">
            <a href="#">Setting</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default header;
