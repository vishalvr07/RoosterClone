import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { MyComponent } from "../../const/index";

function sidebar() {
  return (
    <>
      <div className="bg-gray-200 w-1/5 h-full flex flex-col ml-4 mr-4 ">
        <div className="bg-red-500 w-64 justify-between items-center  mt-5 rounded-md h-full">
          <p className="text-lg flex flex-row pl-4 pt-4 text-orange-50">
            My job Posts(50){" "}
            <div className="ml-2 pt-1">
              {" "}
              <MdAddCircleOutline size={25} />
            </div>
          </p>{" "}
          <p className=" text-sm text-orange-50 pl-4">
            {" "}
            all total jobs listed{" "}
          </p>
          <form>
            <label class="block text-orange-50 text-sm pl-4 mt-6">
              Department{" "}
            </label>
            <div className="pl-4 pt-1 mr-4 text-orange-50">
              <MyComponent />
            </div>

            <label class="block text-orange-50 text-sm pl-4 mt-2">
              Jobs types{" "}
            </label>
            <div className="pl-4 pt-1 mr-4 text-orange-50">
              <MyComponent />
            </div>

            <div className="pl-4 mt-3 flex text-orange-50 text-sm">
              <div className="pr-4">
                <input className="" type="checkbox" id="" name="" value="" />{" "}
                All
              </div>
              <div className="pr-4">
                <input className="" type="checkbox" id="" name="" value="" />{" "}
                Active
              </div>
              <div className="pr-4">
                {" "}
                <input
                  className=""
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                />{" "}
                Inactive
              </div>
            </div>
            <div className="w-50 p-3">
              {" "}
              <hr />{" "}
            </div>
          </form>{" "}
          <div className="">
            <button
              className="bg-red-400 text-orange-50  p-3 rounded-md m-3 w-56"
              type="button"
            >
              <div className="text-xl"> Front end developer</div>
              <div className="text-sm"> (Full time) </div>
              <div className="text-base"> columbo sri-lanka </div>
            </button>
          </div>
          <div className="">
            <button
              className="bg-red-400 text-orange-50  p-3 rounded-md m-3 w-56"
              type="button"
            >
              <div className="text-xl"> QA Engineer</div>
              <div className="text-sm"> (Internship) </div>
              <div className="text-base"> columbo sri-lanka </div>
            </button>
          </div>
          <div className="">
            <button
              className="bg-red-400 text-orange-50  p-3 rounded-md m-3 w-56"
              type="button"
            >
              <div className="text-xl"> UI Designer</div>
              <div className="text-sm"> (Full time) </div>
              <div className="text-base"> columbo sri-lanka </div>
            </button>
          </div>

          <div className="">
            <button
              className="bg-red-400 text-orange-50  p-3 rounded-md m-3 w-56"
              type="button"
            >
              <div className="text-xl"> UI Designer</div>
              <div className="text-sm"> (Full time) </div>
              <div className="text-base"> columbo sri-lanka </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default sidebar;
