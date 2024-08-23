// import React, { useRef, useEffect } from "react";
// import "./../../App.css";
// const Header = () => {
//   const headerRef = useRef(null);

//   const StickyHeader = () => {
//     window.addEventListener("scroll", () => {
//       if (
//         document.body.scrollTop > 80 ||
//         document.documentElement.scrollTop > 80
//       ) {
//         headerRef.current.classList.add("sticky__header");
//       } else {
//         headerRef.current.classList.remove("sticky__header");
//       }
//     });
//   };
//   useEffect(() => {
//     StickyHeader();

//     return window.removeEventListener("scroll", StickyHeader);
//   }, []);

//   const handleClick = (e) => {
//     e.preventDefault();
//     const targetAttr = e.target.getAttribute("href");
//     const location = document.querySelector(targetAttr).offsetTop;
//     window.scrollTo({
//       top: location - 80,
//       left: 0,
//     });
//   };
//   return (
//     <header
//       ref={headerRef}
//       className="w-full h-[80px] leading-[80px] flex items-center"
//     >
//       <div className="container">
//         <div className="flex items-center justify-between">
//           {/* Logo  */}
//           <div className="flex items-center gap-[10px]">
//             <span
//               className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full
//             flex items-center justify-center"
//             >
//               M
//             </span>
//             <div className="leading-[20px]">
//               <h2 className="text-xl text-smallTextColor font-[700]">Bala</h2>
//               <p className="text-smallTextColor text-[16px] font-[500]">
//                 Personal
//               </p>
//             </div>
//           </div>
//           {/* Logo end  */}
//           {/* Menu Start  */}
//           <div className="menu">
//             <ul className="flex items-center gap-10">
//               <li>
//                 <a
//                   onClick={handleClick}
//                   className="text-smallTextColor font-[600]"
//                   href="about"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   onClick={handleClick}
//                   className="text-smallTextColor font-[600]"
//                   href="services"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   onClick={handleClick}
//                   className="text-smallTextColor font-[600]"
//                   href="portfolio"
//                 >
//                   Portfolio
//                 </a>
//               </li>
//               <li>
//                 <a
//                   onClick={handleClick}
//                   className="text-smallTextColor font-[600]"
//                   href="contact"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/* Menu end  */}
//           {/* Menu Right*/}
//           <div
//             className="flex items-center gap-4 text-smallTextColor font-[600] border border-solid border-smallTextColor
//           py-2 px-2  rounded -[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300"
//           >
//             <button>
//               <i class="ri-send-plane-line"></i> Let's Talk
//             </button>
//             <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
//               <i class="ri-menu-line"></i>
//             </span>
//           </div>
//           {/* Menu End*/}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useRef, useEffect } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const MenuRef = useRef(null);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(`#${targetAttr}`).offsetTop;
    window.scrollTo({
      top: location - 80,
      left: 0,
      // behavior: "smooth",
    });
  };

  const toggleMenu = () => MenuRef.current.classList.toggle("show__menu");
  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-[10px]">
            <span
              className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full 
              flex items-center justify-center"
            >
              BM
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Bala</h2>
              <p className="text-smallTextColor text-[16px] font-[500]">
                Personal
              </p>
            </div>
          </div>
          {/* Logo end */}
          {/* Menu Start */}
          <div className="menu" ref={MenuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Menu end */}
          {/* Menu Right */}
          <div
            className="flex items-center gap-4 text-smallTextColor font-[600] border border-solid border-smallTextColor
            py-2 px-2 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300"
          >
            <button>
              <i className="ri-send-plane-line"></i>Let's Talk
            </button>
            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i className="ri-menu-line"></i>
            </span>
          </div>
          {/* Menu End */}
        </div>
      </div>
    </header>
  );
};

export default Header;
