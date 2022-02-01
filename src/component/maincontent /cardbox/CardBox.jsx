import { PinDropSharp } from "@mui/icons-material";
import React from "react";
import Card from "../cards/Card";

function CardBox(props) {

  const drop = e => {
    e.preventDefault();
    
    const card_id = e.dataTransfer.getData('card_id');
    
    const card = document.getElementById(card_id);
    card.style.display='block';
    
    e.target.appendChild(card);
    
   }
   
   const dragOver = e =>{
   e.preventDefault();
   
   }
   

  return (
    <div
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
      className=" ml-6 mt-6 rounded-lg flex flex-col h-96 mb-6 w-1/5 bg-gray-200"
    >

    {props.children}


      <div className="flex flex-row mt-3">
        <p className="text-gray-700 font-medium text-sm ml-4">Screening</p>
        <p className="text-gray-700 text-sm ml-20">06</p>
      </div>
      <div className="border-b-2 border-gray-400 mt-2 mb-2 ml-4 mr-4">
        <hr />
      </div>
      <Card />

      <Card />

      <Card />
    </div>
  );
}


export function CardBoxB() {
  return (
    <div
      id="card-box"
      className=" ml-6 mt-6 rounded-lg flex flex-col h-96 mb-6 w-1/5 bg-gray-200"
    >
      <div className="flex flex-row mt-3">
        <p className="text-gray-700 text-sm font-medium ml-4">Qualified</p>
        <p className="text-gray-700 text-sm ml-20">02</p>
      </div>
      <div className="border-b-2 border-gray-400 mt-2 mb-2 ml-4 mr-4">
        <hr />
      </div>
      <Card />

      <Card />
    </div>
  );
}

export function CardBoxC() {
  return (
    <div
      id="card-box"
      className=" ml-6 mt-6 rounded-lg flex flex-col h-96 mb-6 w-1/5 bg-gray-200"
    >
      <div className="flex flex-row mt-3">
        <p className="text-gray-700 text-sm font-medium ml-4">Interview</p>
        <p className="text-gray-700 text-sm ml-20">04</p>
      </div>
      <div className="border-b-2 border-gray-400 mt-2 mb-2 ml-4 mr-4">
        <hr />
      </div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export function CardBoxD() {
  return (
    <div
      id="card-box"
      className=" ml-6 mt-6 rounded-lg flex flex-col h-96 mb-6 w-1/5 bg-gray-200"
    >
      <div className="flex flex-row mt-3">
        <p className="text-gray-700 text-sm font-medium ml-4">Shortlisted</p>
        <p className="text-gray-700 text-sm ml-20">04</p>
      </div>
      <div className="border-b-2 border-gray-400 mt-2 mb-2 ml-4 mr-4">
        <hr />
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardBox;
