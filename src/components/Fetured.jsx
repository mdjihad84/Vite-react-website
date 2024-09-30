
function Featured() {
  return (
    <div className="bg-white p-4">
      <div className="text-center mb-6">
        <h2 className="text-black text-4xl md:text-3xl font-bold my-6">Featured Bikes This Year</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <img src="/src/assets/images/others/feature-bike.png" alt="Featured Bike" className="w-full h-auto"/>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <img src="/src/assets/images/others/feature-bike.png" alt="Featured Bike" className="w-full h-auto"/>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <img src="/src/assets/images/others/feature-bike.png" alt="Featured Bike" className="w-full h-auto"/>
        </div>
      </div>
    </div>
  );
};

export default Featured;