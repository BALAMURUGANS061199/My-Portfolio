import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo  */}
          <div className="flex items-center gap-[10px]">
            <span
              className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full 
            flex items-center justify-center"
            >
              M
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Bala</h2>
              <p className="text-smallTextColor text-[16px] font-[500]">
                Personal
              </p>
            </div>
          </div>
          {/* Logo end  */}
          {/* Menu Start  */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-smallTextColor font-[600]" href="">
                  About
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="">
                  Services
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Menu end  */}
          {/* Menu Right*/}
          <div
            className="flex items-center gap-4 text-smallTextColor font-[600] border border-solid border-smallTextColor
          py-2 px-2  rounded -[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300"
          >
            <button>
              <i class="ri-send-plane-line"></i> Let's Talk
            </button>
            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i class="ri-menu-line"></i>
            </span>
          </div>
          {/* Menu End*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
