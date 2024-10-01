function Latest() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-semibold text-black mt-6">latest News</h1>
        </div>

        {/* 1st card */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="card w-full sm:w-80 md:w-96 shadow-xl p-6 border border-solid">
            <figure>
              <img src="/src/assets/images/others/Latest1.png" alt="Ducati XDIAVEL S-73" className="w-full"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-bold">Ducati XDIAVEL S-73</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
              <div className="card-actions">
                <button className="btn btn-md bg-red-400 text-white px-6 mt-4 border-none">Read More</button>
              </div>
            </div>
          </div>

          {/* 2nd card */}
          <div className="card w-full sm:w-80 md:w-96 shadow-xl p-6 border border-solid">
            <figure>
              <img src="/src/assets/images/others/Latest2.png" alt="Motorcycles & Scooters" className="w-full"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-bold">Motorcycles & Scooters</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
              <div className="card-actions">
                <button className="btn btn-md bg-red-400 px-6 mt-4 text-red-500 border-red-500 bg-transparent">Read More</button>
              </div>
            </div>
          </div>

          {/* 3th card */}
          <div className="card w-full sm:w-80 md:w-96 shadow-xl p-6 border border-solid">
            <figure>
              <img src="/src/assets/images/others/Latest3.png" alt="2021 Honda CBR500R" className="w-full"/>
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
    </section>
  );
}
export default Latest;
