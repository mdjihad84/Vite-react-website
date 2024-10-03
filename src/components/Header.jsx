
function Header() {
  return (
    <div className="flex justify-between px-6 sticky">
      <div className="flex items-center">
        <img src="/public/images/logo.png" className="h-10 w-10 mr-2" alt="" />
        <span className="text-xl text-white">VirtualR</span>
      </div>
      <div className="">
        <ul className="inline-flex gap-12 mt-3">
          <li><a className="text-white" href="">Features</a></li>
          <li><a className="text-white" href="">Workflow</a></li>
          <li><a className="text-white" href="">Testimonials</a></li>
          <li><a className="text-white" href="">Testimonials</a></li>
        </ul>
      </div>
      <div className="">
        <button className="py-2 px-3 border rounded-md text-white">Sing In</button>
        <button className="btn bg-gradient-to-r from-orange-500 to-orange-800 px-3 ml-8 text-white">Create an account</button>
      </div>
    </div>
  );
};

export default Header;