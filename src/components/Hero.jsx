
function hero() {
    return (
      <section className="hero bg-base-200 min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse bg-red-100 p-8">
          <img
          src="/src/assets/images/slider/bike1.png"
          className="max-w-sm rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold text-black">Ride-on R15 V4 with Smile</h1>
          <p className="py-6 text-black">
            Amet minim mollit non deserunt ullamco 
            est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
          <button className="btn btn-md bg-red-400 text-white px-6 border-none">Purchase</button>
        </div>
      </div>
      </section>
    );
};
export default hero;