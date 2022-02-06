import React , {useState} from "react";
import Modal from "react-modal";
import ui from "../../../assets/ui2.png"

function Description() {


    const [show, setShow] = useState(false);

    const handleClick = () => {
      setShow(true);
    };
    const hide = () => {
      setShow(false);
    };
  
    const AddCandidatesModal = () => {
      const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          padding: "0px",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "20px",
        },
      };
      return (
        <>
          <Modal isOpen={show} style={customStyles}>
            <div className="  bg-red-500 p-8 text-black-50 ">
              <p
                onClick={hide}
                className="absolute left-3/4 ml-12 -mt-5 mb-8 cursor-pointer "
              >
                X
              </p>
              <h1 className="text-orange-50 text-2xl  mb-3 mt-8">
                
                Are You Sure ? 
              </h1>
  
            </div>
          </Modal>
        </>
      );
    };
  





  return (
    <div>
      <div className="bg-gray-300 ml-2 mr-6 rounded w-12/12 ">
        <div className="flex flex-row justify-between">
          <p className="ml-3 p-2 mt-2 text-gray-700 text-sm">
            21 Total Candidates
          </p>
          <div className="ml-12 flex flex-row">
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
        {
          //content will go there
        }
        <div className="flex ">
          <div className=" flex flex-col w-3/5 m-1 p-3 ml-10 mt-4  h-full rounded-md bg-gray-200">
            <div className=" mt-5  w-full flex flex-row justify-evenly">
              <p className=" -ml-10 text-2xl font-semibold">UI/UX Designer</p>

              <p className="text-gray-500 text-sm mt-2  "> Gale , Sri Lanka </p>

              <p className="text-gray-500 text-sm mt-2  "> Part-Time</p>
              <button className="mt-1 h-6 text-sm text-slate-100 rounded hover:scale-105  bg-green-500  w-24">
                Active
              </button>
            </div>

            <p className="text-xl mt-4 text-gray-700 font-medium">
              Description For Job :-{" "}
            </p>
            <div>
              <p className="text-gray-500 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Dictum sit amet justo donec enim diam vulputate. Ipsum dolor sit
                amet consectetur adipiscing elit. Mus mauris vitae ultricies leo
                integer malesuada nunc vel risus. Commodo elit at imperdiet dui
                accumsan sit amet nulla. Dignissim sodales ut eu sem integer
                vitae justo. Proin libero nunc consequat interdum varius sit.
                Pulvinar etiam non quam lacus. Massa enim nec dui nunc.
                Facilisis sed odio morbi quis commodo odio aenean. Urna duis
                convallis convallis tellus id interdum velit.
              </p>
            </div>

            <div className="flex space-x-7 m-4 cursor-pointer">
              <p className="text-blue-500 text-sm mt-2 scale-105 hover:text-blue-700"> Edit Description </p>
              <p className="text-red-500 text-sm mt-2 scale-105 hover:text-red-700"> Delete Description </p>
              <button className="mt-1 p-1 text-sm text-slate-100 rounded hover:scale-105  bg-red-500  ">
                Set as Inactive
              </button>{" "}
            </div>
          </div>

          <div className="m-3 mt-5 bg-gray-200 ml-9 ">
          
          
          <img
                    className=" rounded w-64 h-64 border-2  "
                    src={ui}
                    alt="bell"
                  />
           <button className="mt-1 p-3 ml-12 w-40 text-sm text-slate-100 rounded hover:scale-105  bg-purple-500  ">
               Gallary 
              </button>

           </div>
          

        </div>
    


        {
            // content will got ehr ere
        }

        <div className=" flex flex-col w-5/5 mr-20 m-1 p-3 ml-10 mt-4  h-full rounded-md bg-gray-200">
            <div className=" mt-5  w-full flex flex-row justify-between">
              <p className="  text-2xl font-semibold">Hiring Team </p>

              <p className="text-gray-500 text-sm mt-2 mr-7 "> Meet our hiring team  </p>

            </div>

            <p className="text-xl mt-4 text-gray-700 font-medium">
             Hiring Manager 
            </p>
            <div>
              
              <p>Audrey Hepburn </p>
              <p className="text-gray-500 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>

            <div className="flex space-x-7 m-4 cursor-pointer">
              <p className="text-blue-500 text-sm mt-2"> Edit Description </p>
              <p className="text-red-500 text-sm mt-2"> Delete Description </p>
              <button className="mt-1 p-1 text-sm text-slate-100 rounded hover:scale-105  bg-red-500  ">
                Set as Inactive
              </button>{" "}
            </div>
          </div>


      </div>
    </div>
  );
}

export default Description;
