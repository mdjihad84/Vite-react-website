
function Hero() {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row-reverse items-center bg-red-100 p-8 lg:p-20 w-full max-w-screen-xl mx-auto lg:h-[600px]">
        {/* Use the imported image */}
        <img src="/public/images/Bike1.png" className="w-full lg:w-[400px] rounded-lg" alt="Bike" />
        <div className="lg:mr-8 text-center lg:text-left mt-6 lg:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-black">Ride-on R15 V4 with Smile</h1>
          <p className="py-4 md:py-6 text-black font-sans lg:w-[360px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit.
          </p>
          <button className="btn bg-red-400 text-white px-8 py-2 rounded-md border-none text-base">Purchase</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
