import './App.css'
import topLogo from "../src/assets/logo1.png"
import girlImg from "../src/assets/gitlImage.png"
import line from "../src/assets/verticalLine.png"
import video from "../src/assets/video1.mp4"
function App() {

//  position: absolute;

  return (
    <main className="main flex flex-col justify-between space-y-[40px] items-center ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video 
      
      "
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay "></div>
      <div className="">
        <img src={topLogo} alt="" /> <p className="">Lorem Ipsum</p>
      </div>
      <div>
        <h1>Lorem Ipsum</h1>
        <small>in</small>
        <h1>Lorem Ipsum</h1>
      </div>
      <div>
        {" "}
        <img
          src={girlImg}
          className="w-[25px] h-[25px] rounded-full"
          alt="girl"
        />{" "}
        <p>lorem by</p> <h3>Lorem & Ipsum lorem</h3>{" "}
      </div>
      <div>
        <button>Lorem</button>
        <button>ipsum</button>
        <p>27 + lorem</p>
      </div>

      <div>
        <img src={line} alt="" />
      </div>
    </main>
  );
}

export default App
