import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { BsFillShareFill, BsBagDashFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";


function MainHead() {
  return (

<div className="w-3/5">
              <div className=" mt-5  w-full flex flex-row">
                <p className="text-2xl font-semibold">UI/UX Designer</p>
                <button className="ml-8 mt-1 h-6 text-sm text-slate-100 rounded hover:scale-105  bg-green-500  w-24">
                  Active
                </button>
                <a href="#" className="hover:scale-110">
                  {" "}
                  <BsFillShareFill
                    color="rgb(94 92 91)"
                    className="ml-4 mt-2"
                  />{" "}
                </a>
                <a href="#" className="hover:scale-110">
                  {" "}
                  <MdModeEdit
                    color="rgb(94 92 91)"
                    className="ml-3 mt-2 "
                  />{" "}
                </a>
                <a href="#" className="hover:scale-110">
                  <AiFillDelete color="rgb(94 92 91)" className="ml-3 mt-2 " />{" "}
                </a>
              </div>
              <div className="flex flex-row text-sm pt-3 text-gray-500">
                <BsBagDashFill className="mr-3 mt-1" /> Part-Time
                <FaLocationArrow className="ml-4 mr-3 mt-1" /> Gale , Sri lanka
              </div>
              <div>
                <p className="text-gray-500 text-sm mt-4">
                  lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem
                  ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                  ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ...{" "}
                  <a className="text-red-500" href="#">
                    Read more
                  </a>
                </p>
              </div>
            </div> );
}

export default MainHead;
