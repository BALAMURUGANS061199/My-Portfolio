import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#12141e] pt-12">
      {/* Footer Top */}
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0 text-center sm:text-left">
            <h2 className="text-[24px] sm:text-[26px] md:text-[2rem] leading-8 sm:leading-10 text-white font-[600] mb-4">
              Do You Want to Make a Beautiful Product?
            </h2>
            <a href="#contact">
              <button
                className="bg-primaryColor text-white font-[500] flex items-center justify-center sm:justify-start gap-2 hover:bg-smallTextColor 
                ease-in duration-200 py-2 px-4 rounded-[8px]"
              >
                <i className="ri-mail-line"></i> Hire Me
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <p className="text-gray-300 leading-7 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-4 flex-wrap md:gap-8 mt-6">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me:
              </span>
              {["github", "youtube", "instagram", "facebook"].map(
                (platform) => (
                  <span
                    key={platform}
                    className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-full cursor-pointer text-center"
                  >
                    <a href="" className="text-gray-300 font-[500] text-[18px]">
                      <i className={`ri-${platform}-line`}></i>
                    </a>
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {["About", "Services", "Portfolio", "Contact"].map((item) => (
              <li key={item}>
                <a className="text-gray-400 font-[600]" href="">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-[#1b1e29] py-3 mt-14">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center sm:text-left">
            <div className="mb-4 sm:mb-0 flex items-center justify-center sm:justify-start">
              <div className="flex items-center gap-[10px]">
                <span
                  className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white 
                font-[500] text-[18px] flex items-center justify-center"
                >
                  BM
                </span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">
                    BALAMURUGAN S
                  </h2>
                  <p className="text-gray-400 text-[14px] font-[500]">
                    Personal
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-[14px]">
                Copyright {year} Developed by BALAMURUGAN S - All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
