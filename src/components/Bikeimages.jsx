
function Featured({Bikes}) {
  return (
    <div className="bg-white p-4">
      <div className="text-center mb-8">
        <h2 className="text-black text-5xl font-semibold my-8">Featured Bikes This Year</h2>
        <p className="text-center text-red-400 mb-16 mt-[-16px]">Best bike collection</p>
      </div>
      <div className="flex flex-wrap justify-center gap-12">
        {Bikes.map((Bike, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <img src={Bike.imageUrl} alt={Bike.name} className="w-full h-auto"/>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Featured;