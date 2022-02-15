import "./App.css";
import Header from "./component/header/header";
import Sidebar from "./component/sidebar/sidebar";
import MainHead from "./component/mainhead/MainHead";
import HiringTeam from "./component/hiringTeam/HiringTeam";
import MainContent from "./component/maincontent/MainContent";


function App() {



  return (
    <div className="bg-gray-200">
      <Header />

      <div className="flex">
        <Sidebar />

        <div className="flex flex-col ">
          <div className="flex  flex-row ml-6 h-52 ">
            <MainHead />
          
          {    //this div down there is for a seprator line between mainhead and hiring team in UI .
            }
            <div className=" flex flex-col border-r-2 ml-6 mt-10 relative border-gray-400 h-24"></div>

            <HiringTeam />
          </div>
          
          {  //main content only - starts---------------------------------------------------------------------
          }
            <MainContent />

        </div>
        {
          //main content close
        }
      </div>
    </div>
  );
}

export default App;
