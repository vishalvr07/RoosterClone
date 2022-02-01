import React, { useState } from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import CardModal from "../../modal/CardModal"


function Card(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }

  const handleShow = () => setShow(true);

//code for drag and drop in JS . 
  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };



  return (
    <div
    onClick={handleShow}
      id={props.id}
      draggable={true}
      onDragStart={dragStart}
      onDragOver={dragOver}
      className="bg-gray-300 ml-2 mr-2 mt-1 mb-1 rounded-lg h-20 hover:scale-105"
    >
      

      <div className="text-sm mt-2 ml-2 flex flex-row ">
        Ryan Perare <p className="ml-20 "></p>{" "}
      </div>
      <div className="text-xs ml-2 text-gray-700  ">06 Days Ago</div>
      <div className="flex flex-row ml-2 ">
        <div className="text-xs text-gray-700 ">
          {" "}
          <div className="flex flex-row pt-1 pb-1 pr-1">
            {" "}
            <BiMessageAltDetail size={15} color="#696969" /> &nbsp; 03{" "}
          </div>{" "}
        </div>
        <div className="text-xs text-gray-700 ">
          {" "}
          <div className="flex flex-row p-1 pl-2">
            {" "}
            <AiOutlinePaperClip size={15} color="#696969" /> &nbsp; 02
          </div>{" "}
        </div>
        <div className="text-xs text-gray-700 ml-10 ">
          {" "}
          <div className="flex flex-row p-1">
            {" "}
            <AiOutlineHeart size={15} color="#696969" /> &nbsp; 03{" "}
          </div>{" "}
        </div>
      </div>

      {
        show ?    <CardModal show={show}  /> : '' 
            }
   

    </div>
  );
}

export default Card;
