
function Hero() {
  return (
    <section className="hero min-h-screen bg-white">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center bg-red-100 p-20 my-6">
        <img src="/src/assets/images/slider/bike1.png" className="max-w-full lg:max-w-sm rounded-lg" alt="Bike"/>
        <div className="lg:mr-8 text-center lg:text-left mt-6 lg:mt-0">
          <h1 className="text-3xl md:text-5xl font-bold text-black">Ride-on R15 V4 with Smile</h1>
          <p className="py-4 md:py-6 text-black">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit.
          </p>
          <button className="btn btn-md bg-red-400 text-white px-6 border-none">Purchase</button>
        </div>
      </div>
    </section>
  );
}
export default Hero;
