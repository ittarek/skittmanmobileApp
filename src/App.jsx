import './App.css'
import topLogo from "../src/assets/logo1.png"
import girlImg from "../src/assets/girlRoundImg.png"
import line from "../src/assets/verticalLine.png"
import video from "../src/assets/video2.mp4"
function App() {

//  position: absolute;

  return (
    <main className="flex flex-col justify-evenly items-center  h-screen mx-auto  ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video h-full w-full top-0 left-0 absolute object-cover -z-10"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>

      {/* Top Logo */}
      <div className=" mx-auto text-center">
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
      <div className="text-center flex flex-col justify-between items-center ">
        <div className="flex items-center flex-col justify-center text-[#fff] mb-8">
          <img src={girlImg} className="mb-2" alt="girl" />

          <h3 className="">
            {" "}
            <p className="text-sm">lorem by</p>
            <p className='font-bold'>Lorem & Ipsum lorem</p>
          </h3>
        </div>
        <div className="flex items-center justify-between  bg-[#4C5555] text-[#FFFFFF] rounded-full border border-[#3a3a3a] p-4 w-[200px] my-2  font-serif btn_div">
          <button> + Lorem</button>
          <button> + ipsum</button>
        </div>{" "}
        <p className='text-sm text-[#fff] my-1'>27 + lorem</p>
        <div className=' absolute bottom-0 '>
          <img src={line} alt="line" />
        </div>
      </div>
    </main>
  );
}

export default App
