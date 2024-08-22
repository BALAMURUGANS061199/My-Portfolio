// import React from "react";
// import portfolios from "../../assets/data/portfolioData";
// const Modal = ({ activeID, setShowModels }) => {
//   const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);
//   return (
//     <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
//       <div
//         className="w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2
//       -translate-y-1/2 p-5"
//       >
//         <div>
//           <figure>
//             <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
//           </figure>
//         </div>
//         <div>
//           <h2 className="text-2xl text-headingColor font-700 my-5">
//             {portfolio.title}
//           </h2>
//           <p className="text-[15px] leading-7 text-smallTextColor">
//             {portfolio.description}
//           </p>
//           <div className="mt-5 flex items-center gap-3 flex-wrap">
//             <h4 className="text-headingColor text-[18px] text-[700]">
//               Technologies
//             </h4>
//             {portfolio.technologies.map((item, index) => (
//               <span
//                 key={index}
//                 className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 "
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//           <a href={portfolio.siteUrl}>
//             <button
//               className="bg-primaryColor text-white py-2 px-4 my-8
//             rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300"
//             >
//               Live Site
//             </button>
//           </a>
//         </div>

//         <button
//           onClick={() => setShowModels(false)}
//           className="w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center
//         justify-center rounded-[3px] leading-0 cursor-pointer"
//         >
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModels }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  return (
    <div className="fixed inset-0 z-10 bg-headingColor bg-opacity-40 flex items-center justify-center">
      <div className="w-11/12 max-w-[90%] md:max-w-[600px] md:w-full bg-white rounded-[8px] p-5 relative">
        <div>
          <figure>
            <img
              className="rounded-[8px] w-full"
              src={portfolio.imgUrl}
              alt=""
            />
          </figure>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl text-headingColor font-700 my-4 md:my-5">
            {portfolio.title}
          </h2>
          <p className="text-[14px] md:text-[15px] leading-6 md:leading-7 text-smallTextColor">
            {portfolio.description}
          </p>
          <div className="mt-4 md:mt-5 flex items-center gap-2 md:gap-3 flex-wrap">
            <h4 className="text-headingColor text-[16px] md:text-[18px] font-[700]">
              Technologies
            </h4>
            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[12px] md:text-[14px] leading-none"
              >
                {item}
              </span>
            ))}
          </div>
          <a href={portfolio.siteUrl}>
            <button
              className="bg-primaryColor text-white py-2 px-4 my-6 md:my-8 
            rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300 w-full md:w-auto"
            >
              Live Site
            </button>
          </a>
        </div>

        <button
          onClick={() => setShowModels(false)}
          className="w-[1.5rem] h-[1.5rem] md:w-[1.8rem] md:h-[1.8rem] bg-white absolute top-[1rem] md:top-[1.7rem] right-[1rem] md:right-[1.7rem] text-[20px] md:text-[25px] flex items-center
        justify-center rounded-[3px] leading-none cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
