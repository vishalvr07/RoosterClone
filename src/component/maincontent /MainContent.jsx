import { Card } from '@mui/material';
import React from 'react';
import { MdAlignVerticalTop } from "react-icons/md";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import CardBox, { CardBoxB, CardBoxC, CardBoxD } from './cardbox/CardBox';


function MainContent() {
  return <>

<div className="flex flex-row ">
            <div className="font-bold ml-6 ">Description</div>
            <div className="font-bold ml-6 mr-5   border-b-4 border-red-500">
              Pipe-line
            </div>
            <div className="font-bold">Application</div>
          </div>

          <div className="bg-gray-300 ml-2 mr-6 rounded w-12/12 ">
            <div className="flex flex-row justify-between">
              <p className="ml-3 p-2 mt-2 text-gray-700 text-sm">
                21 Total Candidates
              </p>
              <div className="ml-12 flex flex-row">
                <MdAlignVerticalTop
                  className="mr-3 mt-2 bg-red-500 rounded p-1"
                  color="white"
                  size={30}
                />
                <RiBarChartHorizontalFill
                  className="mr-3 mt-2"
                  color="gray"
                  size={25}
                />
                <div className="h-8 mt-2 ">
                  <input
                    type="text"
                    className="bg-gray-300 border-2 rounded border-gray-600"
                    placeholder="What are you looking for?"
                  />
                </div>

                <button className="ml-5 mt-2 h-7 text-sm text-white rounded hover:scale-105 bg-blue-900  w-44">
                  Mark all as read{" "}
                </button>
                <button className="ml-5 mt-2 h-7 mr-2 text-sm text-white rounded hover:scale-105 bg-red-500  w-44">
                  Add candidates
                </button>
              </div>
            </div>

            <div className="border-b-2 border-gray-400 mt-1 ml-4 mr-4">
              {" "}
              <hr />{" "}
            </div>
            
            <div className='flex flex-row    '>
           <CardBox id="card_id" > 
           <Card />
           </CardBox>

           <CardBox id="card_id" > 
           <Card />
           </CardBox>
           
           <CardBoxB />
           <CardBoxC />
           <CardBoxD />
           {/* <CardBox />
           <CardBox />     */}
           </div>
          </div>
  </>;
}

export default MainContent;
