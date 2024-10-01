
function Header() {
  return (
    <section className="navbar bg-white px-20">
      <div className="navbar-start mt-4">
        {/*(Dropdown for small screens) */}
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
            </svg>
          </button>
          <ul tabIndex={0}className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 z-10">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        {/* Logo for large screens */}
        <a className="btn btn-ghost hidden lg:block text-black font-bold text-4xl font-system-ui">Bike Zone</a>
      </div>

      {/* Navbar links for large screens */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className="text-black ml-2 text-base font-semibold" href="#">Home</a></li>
          <li><a className="text-black ml-2 text-base font-semibold" href="#">Shop</a></li>
          <li><a className="text-black ml-2 text-base font-semibold" href="#">News</a></li>
          <li><a className="text-black ml-2 text-base font-semibold" href="#">Contact</a></li>
        </ul>
        <button className="btn bg-red-400 text-white px-10 border-none text-base ml-4">Login</button>
      </div>

      {/* Logo for small screens */}
      <a className="btn text-xl ml-auto lg:hidden font-bold bg-red-400 border-none text-white font-system-ui">Bike Zone</a>
    </section>
  );
}
export default Header;
