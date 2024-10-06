function Header() {
  return (
    <div className="navbar bg-white">
      <div className="navbar-start mt-6">
        
        {/* Small device dropdown */}
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Large device left side */}
        <a className="btn btn-ghost hidden lg:block text-black font-bold text-4xl font-system-ui pl-[7rem]">Bike Zone</a>
      </div>

      {/* Large device navigation */}
      <div className="navbar-end lg:flex mt-6 pr-[2rem]">
        <ul className="menu menu-horizontal px-1">
          <li><a className="text-black ml-2 text-base font-semibold" href="#">Home</a></li>
          <li><a className="text-black ml-2 text-base font-semibold" href="#">Shop</a></li>
          <li><a className="text-black ml-2 text-base font-semibold" href="#">News</a></li>
          <li><a className="text-black ml-2 text-base font-semibold" href="#">Contact</a></li>
        </ul>
      </div>

      {/* Small screens button */}
      <button className="btn bg-red-400 ml-auto lg:hidden text-white px-10 border-none text-base">Login</button>

      {/* Large device button */}
      <button className="btn bg-red-400 text-white px-10 py-2 mr-28 rounded-md border-none text-base mt-6">Login</button>
    </div>
  );
};
export default Header;
