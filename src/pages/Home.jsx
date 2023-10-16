import React from "react";
import Iphone from "../assets/iPhone 12 Pro-up.png";
import Star1 from "../assets/Star 2.svg";
import Line from "../assets/Element 09.svg";
import Star2 from "../assets/Star 1.svg";
import Hand from "../assets/handFrame.png";
import Bulb from "../assets/bulbFrame.png";
import PreviousSlide from "../assets/previous.png";
import NextSlide from "../assets/forward.png";
import slideDb from "../compments/SlideDb";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Download from "../compments/Download";

const Home = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="">
      <div className="isolate flex justify-center bg-custom-green py-10">
        <div className="relative max-w-[85%] w-[100%] lg:flex items-center justify-between gap-10 text-white">
          <div className="relative max-w-[750px] m-auto text-left space-y-3 w-[100%] lg:w-[50%]">
            <h1 className="text-[50px] font-[600]">Pause Point</h1>
            <p className="text-[18px] lg:text-[22px]">
              Lorem ipsum dolor sit amet consectetur. Adipiscing neque massa et
              netus ut luctus porta duis in. Lorem ipsum dolor sit amet
              consectetur. Adipiscing neque massa et netus ut luctus porta duis
              in.
            </p>
            <img
              src={Line}
              alt="line"
              className="absolute -z-10 right-0 lg:right-20 bottom-0"
            />
            <button className="bannerBtn">Download App</button>
          </div>

          {/* Iphone */}
          <div className="w-[100%] lg:w-[50%] flex justify-center">
            <img src={Iphone} alt="iphone" className="hidden lg:block" />
            <img src={Star2} alt="star" className="absolute -z-10 top-0 right-0" />
          </div>
          <img src={Star1} alt="star" className="absolute -z-10 bottom-0 left-0" />
        </div>
      </div>

      <div
        className="flex flex-col items-center gap-32 bg-[#D6EDCA] py-20"
        ref={ref}
      >
        <div className="max-w-[85%] w-[100%] lg:flex items-center justify-between gap-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-[55%]"
          >
            <img src={Hand} alt="hand" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-3 mt-10 lg:mt-0 w-full lg:w-[40%]"
          >
            <h2 className="text-[36px] font-[600]">What we offer</h2>
            <p className="text-[20px] tracking-[0.4px]">
              Lorem ipsum dolor sit amet consectetur. Lacus aliquam lobortis non
              cursus urna accumsan elit. Id ipsum quisque arcu enim dignissim
              sem egestas adipiscing.
            </p>
            <p className="add-checkbox flex text-[16px] tracking-[0.32px]">
              Lorem ipsum dolor sit amet consectetur. Id cursus consectetur
              massa in odio porttitor elementum pellentesque.
            </p>
            <p className="add-checkbox flex text-[16px] tracking-[0.32px]">
              Lorem ipsum dolor sit amet consectetur. Id cursus consectetur
              massa in odio porttitor elementum pellentesque.
            </p>
            <p className="add-checkbox flex text-[16px] tracking-[0.32px]">
              Lorem ipsum dolor sit amet consectetur. Id cursus consectetur
              massa in odio porttitor elementum pellentesque.
            </p>
            <p className="add-checkbox flex text-[16px] tracking-[0.32px]">
              Lorem ipsum dolor sit amet consectetur. Id cursus consectetur
              massa in odio porttitor elementum pellentesque.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-[85%] w-[100%] lg:flex items-center justify-between gap-10 lg:flex-row-reverse">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-[55%]"
          >
            <img src={Bulb} alt="bulb" />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-3 mt-10 lg:mt-0 w-full lg:w-[40%]"
          >
            <h2 className="text-[36px] font-[600]">Why Choose Us</h2>
            <p className="text-[20px] tracking-[0.4px]">
              Lorem ipsum dolor sit amet consectetur. Lacus aliquam lobortis non
              cursus urna accumsan elit. Id ipsum quisque arcu enim dignissim
              sem egestas adipiscing.
            </p>
            <p className="add-checkbox flex text-[16px] tracking-[0.32px]">
              Lorem ipsum dolor sit amet consectetur. Id cursus consectetur
              massa in odio porttitor elementum pellentesque.
            </p>
            <p className="add-checkbox flex text-[16px] tracking-[0.32px]">
              Lorem ipsum dolor sit amet consectetur. Id cursus consectetur
              massa in odio porttitor elementum pellentesque.
            </p>
            <p className="add-checkbox flex text-[16px] tracking-[0.32px]">
              Lorem ipsum dolor sit amet consectetur. Id cursus consectetur
              massa in odio porttitor elementum pellentesque.
            </p>
            <p className="add-checkbox flex text-[16px] tracking-[0.32px]">
              Lorem ipsum dolor sit amet consectetur. Id cursus consectetur
              massa in odio porttitor elementum pellentesque.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-32 bg-[#FFFDE4] py-20">
        <div className="max-w-[85%] w-[100%] space-y-20">
          {/* Our Services */}
          <div className="text-center space-y-5">
            <h3 className="text-[36px]">Our Services</h3>
            <p className="max-w-[1038px] w-full m-auto tracking-[0.4px]">
              Lorem ipsum dolor sit amet consectetur. Orci diam curabitur a
              congue. Nulla et lobortis vel ut orci iaculis erat cras amet.
              Senectus ultricies interdum aliquam euismod purus ornare. Blandit
              risus tincidunt leo ornare. Sed phasellus lectus urna habitant
              odio amet ultrices molestie. Auctor leo leo vestibulum sit sed
              fames arcu interdum enim. Semper quis pulvinar venenatis eget
              lobortis amet. Sit viverra luctus praesent mauris et lectus.
              Scelerisque massa scelerisque nulla dis vel gravida. Donec lacus
              nisl suscipit elit consequat mi curabitur egestas. Ornare egestas
              tortor tincidunt massa elit lacus egestas sem laoreet. Lorem ipsum
              dolor sit amet consectetur. Lacus aliquam lobortis non cursus urna
              accumsan elit. Id ipsum quisque arcu enim dignissim sem egestas
              adipiscing.
            </p>
            <button className="seeMoreBtn m-auto">See More...</button>
          </div>

          {/* Subscription Plan */}
          <div className="text-center space-y-5">
            <h3 className="text-[36px]">Subscription Plans</h3>
            <p className="text-[20px]">Subscribe to our Social Plans</p>

            <div className="flex justify-around flex-wrap gap-20 pt-5 pb-10">
              <div className="relative isolate flex items-center justify-center">
                <div className="absolute -z-10 h-[80%] w-[359px] bg-[#9BD4A2] border-[3px] border-black"></div>
                <div className="max-w-[300px] px-3 w-full bg-[#F3FFF3] border-[3px] border-black py-7">
                  <h3 className="text-[36px]">Daily </h3>
                  <p className="border-b-2 border-slate-300 max-w-fit m-auto px-5">
                    N1000
                  </p>

                  <div className="space-y-5 my-5">
                    <p className="checkMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="checkMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="uncheckMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="uncheckMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="uncheckMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="uncheckMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <button className="seeMoreBtn">Subscribe</button>
                  </div>
                </div>
              </div>

              <div className="relative isolate flex items-center justify-center">
                <div className="absolute -z-10 h-[80%] w-[359px] bg-[#9BD4A2] border-[3px] border-black"></div>
                <div className="max-w-[300px] px-3 w-full bg-[#F3FFF3] border-[3px] border-black py-7">
                  <h3 className="text-[36px]">Daily </h3>
                  <p className="border-b-2 border-slate-300 max-w-fit m-auto px-5">
                    N1000
                  </p>

                  <div className="space-y-5 my-5">
                    <p className="checkMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="checkMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="checkMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="checkMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="uncheckMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="uncheckMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <button className="seeMoreBtn">Subscribe</button>
                  </div>
                </div>
              </div>

              <div className="relative isolate flex items-center justify-center">
                <div className="absolute -z-10 h-[80%] w-[359px] bg-[#9BD4A2] border-[3px] border-black"></div>
                <div className="max-w-[300px] px-3 w-full bg-[#F3FFF3] border-[3px] border-black py-7">
                  <h3 className="text-[36px]">Daily </h3>
                  <p className="border-b-2 border-slate-300 max-w-fit m-auto px-5">
                    N1000
                  </p>

                  <div className="space-y-5 my-5">
                    <p className="checkMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="checkMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="checkMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="checkMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="checkMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <p className="checkMark tracking-[0.32px]">
                      Lorem ipsum dolor sit amet
                    </p>
                    <button className="seeMoreBtn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[20px]">Subscribe to our Residential Plans</p>
            <div className="relative isolate flex items-center justify-center">
              <div className="absolute -z-10 h-[80%] max-w-[627px] w-full bg-[#9BD4A2] border-[3px] border-black"></div>
              <div className="max-w-[542px] px-3 w-full bg-[#F3FFF3] border-[3px] border-black py-7">
                <h3 className="text-[36px]">Daily </h3>
                <p className="border-b-2 border-slate-300 max-w-fit m-auto px-5">
                  N1000
                </p>

                <div className="space-y-5 my-5">
                  <p className="checkMark tracking-[0.32px]">
                    Lorem ipsum dolor sit amet consectetur curabitor
                  </p>
                  <p className="checkMark tracking-[0.32px]">
                    Lorem ipsum dolor sit amet consectetur curabitor
                  </p>
                  <p className="checkMark tracking-[0.32px]">
                    Lorem ipsum dolor sit amet consectetur curabitor
                  </p>
                  <p className="checkMark tracking-[0.32px]">
                    Lorem ipsum dolor sit amet consectetur curabitor
                  </p>
                  <p className="checkMark tracking-[0.32px]">
                    Lorem ipsum dolor sit amet consectetur curabitor
                  </p>
                  <p className="checkMark tracking-[0.32px]">
                    Lorem ipsum dolor sit amet consectetur curabitor
                  </p>
                  <button className="seeMoreBtn">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-[85%] w-[100%] text-center">
          <p className="text-[36px]">Testimonials</p>

          {/* Slides */}
          <div className="relative w-[100%] overflow-x-hidden px-3 pb-36">
            <div className="">
              <img
                src={PreviousSlide}
                alt=""
                className="absolute z-10 cursor-pointer left-0 top-0 bottom-0 m-auto"
              />
              <div className="slider-container flex justify-around items-center gap-16">
                {slideDb.map((slide) => {
                  const { id, text, name, title, star, image } = slide;
                  return (
                    <div
                      key={id}
                      className="relative slideBox slide border-2 border-gray-400 min-w-[100%] lg:min-w-[47%] w-[100%] text-start space-y-7 py-12 px-10"
                    >
                      <p>{text}</p>
                      <div className="md:flex items-center justify-between">
                        <div className="flex items-center gap-5">
                          <img src={image} alt="" />
                          <p>
                            <span>{name}</span>
                            <br />
                            {title}
                          </p>
                        </div>
                        <img src={star} alt="" className="mt-5 md:mt-0" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <img
                src={NextSlide}
                alt=""
                className="absolute cursor-pointer z-50 right-0 top-0 bottom-0 m-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <Download />
    </div>
  );
};

export default Home;
