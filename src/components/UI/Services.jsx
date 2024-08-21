import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import BackendImg from "../../assets/images/backend.png";
import UI from "../../assets/images/design.png";
import AppImg from "../../assets/images/apps.png";
const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            What Do I Help
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            placeat reiciendis veritatis ipsam dolore. Cum, quidem culpa
            ducimus, ab sed odit qui nobis modi animi, dolorum at aliquid
            placeat labore.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* vertical Line Running through the Middle */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
              {/* Left Card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          FrontEnd Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Beatae, expedita ex modi voluptatem quos at
                          quasi libero quisquam nisi labore illum quaerat natus
                          sint eum et ducimus fuga quia alias.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 
                  absolute  left-1/2 transform -translate-x-1/2 -translate-y-4  sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* Right Card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Backend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Beatae, expedita ex modi voluptatem quos at
                          quasi libero quisquam nisi labore illum quaerat natus
                          sint eum et ducimus fuga quia alias.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 
                  absolute  left-1/2 transform -translate-x-1/2 -translate-y-4  sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={BackendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* Right Card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          UI/UX Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Beatae, expedita ex modi voluptatem quos at
                          quasi libero quisquam nisi labore illum quaerat natus
                          sint eum et ducimus fuga quia alias.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 
                  absolute  left-1/2 transform -translate-x-1/2 -translate-y-4  sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={UI} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* Left Card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:p-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Apps Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Beatae, expedita ex modi voluptatem quos at
                          quasi libero quisquam nisi labore illum quaerat natus
                          sint eum et ducimus fuga quia alias.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 
                  absolute  left-1/2 transform -translate-x-1/2 -translate-y-4  sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={AppImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
