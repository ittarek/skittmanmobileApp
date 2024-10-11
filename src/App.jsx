import './App.css'
import topLogo from "../src/assets/logo1.png"
import girlImg from "../src/assets/girlRoundImg.png"
import line from "../src/assets/verticalLine.png"
import video from "../src/assets/video2.mp4"
import { LuPhone } from "react-icons/lu";
import { PiCalendarDot } from "react-icons/pi";
function App() {

//  position: absolute;
// flex flex-col  mx-auto w-full lg:w-[450px]  lg:mt-6  h-[100vh] text-white px-4 pb-4  bg-black   overflow-auto touch-auto scroll-smooth
  return (
    <div
      className="flex flex-col justify-between items-center mx-auto w-full lg:w-[450px]   h-[100vh] overflow-auto absolute bottom-0 left-0 right-0 
     "
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video w-full lg:w-[450px]  h-[100vh]  absolute mx-auto  bottom-0  object-cover -z-10 "
      >
        <source src={video} type="video/mp4" />
    
      </video>
      <div className="overlay"></div>

      {/* Top Logo */}
      <div className=" mx-auto text-center lg:mt-11 mt-32 z-10">
        <img src={topLogo} className="" alt="logo" />
        <p className="text-sm uppercase  text-black text-semibold">
          Lorem Ipsum
        </p>
      </div>

      {/* Middle Text */}
      <div className="text-2xl text-center space-y-1 uppercase font-serif text-[#fff] tracking-widest">
        <p className="-ml-11">A Lorem Ipsum</p>

        <p className="ml-11">
          {" "}
          <span className="text-sm font-serif italic"> in</span> Lorem Ipsum
        </p>
      </div>

      {/* Bottom Content */}
      <div className="text-center flex flex-col  items-center mb-11">
        {/*  */}
        <div className="flex items-center flex-col justify-center text-[#fff] mb-9">
          <img src={girlImg} className="mb-2" alt="girl" />

          <h3 className="">
            {" "}
            <p className="text-sm">lorem by</p>
            <p className="font-bold">Lorem & Ipsum lorem</p>
          </h3>
        </div>
        {/*  */}
        <div className="  font-serif btn_div ">
          <div className=" bg-[#4C5555] text-[#FFFFFF] rounded-full border border-[#3a3a3a] p-4 w-[200px] ">
            <button><LuPhone/> Lorem</button>
            <button> <PiCalendarDot/> ipsum</button>
          </div>
          <p className="text-sm text-[#ffff] my-1">27 + lorem </p>
        </div>{" "}
        {/* line */}
        <div className="absolute bottom-0  ">
          <img src={line} alt="line" />
        </div>
      </div>
    </div>
  );
}

export default App
