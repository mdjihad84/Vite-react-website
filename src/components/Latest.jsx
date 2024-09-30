
function latest() {
    return (
      <section className="bg-white">
        <div className="">
          <h1 className="text-center text-white">Latest section</h1>
        </div>
        <div className="flex justify-center gap-6 mt-6">
        <div className="card bg-base-100 w-96 shadow-xl pt-6">
          <figure>
            <img
            src="/src/assets/images/others/latest1.png"
            alt="Shoes"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ducati XDIAVEL S-73</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
            <div className="card-actions justify-left">
              <button className="btn btn-md bg-red-400 text-white px-6">Read More</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl pt-6">
        <figure>
          <img
          src="/src/assets/images/others/latest2.png"
          alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Motorcycles & Scooters</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
          <div className="card-actions justify-left">
            <button className="btn btn-md bg-red-400 text-white px-6">Read More</button>
        </div>
      </div>
    </div>
    <div className="card bg-base-100 w-96 shadow-xl pt-6">
      <figure>
        <img
          src="/src/assets/images/others/latest3.png"
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">2021 Honda CBR500R</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.</p>
        <div className="card-actions justify-left">
          <button className="btn btn-md bg-red-400 text-white px-6">Read More</button>
        </div>
      </div>
    </div>
        </div>
  </section>
    );
};
export default latest;