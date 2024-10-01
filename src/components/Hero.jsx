
function Hero() {
  return (
    <section className="hero min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row-reverse items-center bg-red-100 p-20 py-30 h-[600px]">
        <img src="/src/assets/images/slider/bike1.png" className="max-w-full lg:max-w-sm rounded-lg" alt="Bike"/>
        <div className="lg:mr-8 text-center lg:text-left mt-6 lg:mt-0">
          <h1 className="text-3xl md:text-5xl font-bold text-black">Ride-on R15 V4 with Smile</h1>
          <p className="py-4 md:py-6 text-black font-sans">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit.
          </p>
          <button className="btn bg-red-400 text-white px-10 border-none text-base">Purchase</button>
        </div>
      </div>
    </section>
  );
}
export default Hero;
