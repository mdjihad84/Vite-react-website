
function Latest() {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-semibold text-black my-8">Latest News</h1>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {/* Card 1 */}
          <div className="card shadow-xl p-6 border border-solid w-[25rem]">
            <figure>
              <img src="/public/images/Latest1.png" alt="Ducati XDIAVEL S-73" className="w-full"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-bold">Ducati XDIAVEL S-73</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
              <div className="card-actions">
                <button className="btn btn-md bg-red-400 text-white px-6 mt-4 border-none">Read More</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card shadow-xl p-6 border border-solid w-[25rem]">
            <figure>
              <img src="/public/images/Latest2.png" alt="Motorcycles & Scooters" className="w-full"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-bold">Motorcycles & Scooters</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
              <div className="card-actions">
                <button className="btn btn-md bg-red-400 px-6 mt-4 text-red-500 border-red-500 bg-transparent">Read More</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card shadow-xl p-6 border border-solid w-[25rem]">
            <figure>
              <img src="/public/images/Latest3.png" alt="2021 Honda CBR500R" className="w-full"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-bold">2021 Honda CBR500R</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
              <div className="card-actions">
                <button className="btn btn-md bg-red-400 px-6 mt-4 text-red-500 border-red-500 bg-transparent">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Latest;
