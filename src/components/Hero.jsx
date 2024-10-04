
function Hero() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-7xl w-[725px] text-white mb-8">
                    VirtualR Build Tools <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
                    for Developers</span>
                </h1>
                <p className="w-[680px] mx-auto text-white mb-8">
                    Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
                </p>
                <div className="mt-4">
                    <button className="py-2 px-3 border rounded-md text-white">Start for free</button>
                    <button className="btn bg-gradient-to-r from-orange-500 to-orange-800 px-3 ml-8 text-white">Documentation</button>
                </div>
                {/* <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
            </div>
        </div>

    );
};
export default Hero;
