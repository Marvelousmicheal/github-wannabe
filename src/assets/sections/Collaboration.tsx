import  { useState } from "react";
import { motion } from "framer-motion";
import Discount from "../components/colloboration/Discount";
import HoverCard from "../components/Productivity-content/HoverCard";
import { data } from "../Data";
import Card from "../components/colloboration/Card";
type Props = {};

const Collaboration = ({}: Props) => {
  const [hover, sethover] = useState<boolean>(false)
  const [hovered, sethovered] = useState<boolean>(false)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren:.1,
      },
    },
  };
  return (
    <>
      <div className="max-w-[1280px] mx-auto" id="collaboration">
        <div className="flex md:pl-10 space-x-3 md:space-x-10 ">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "160px" }}
              transition={{ delay: 0.3 }}
              viewport={{ once: false }}
              className="  ml-2 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#ea6045] to-[#ffa28b]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className="relative my-3"
            >
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                width="24"
                fill="currentColor"
                data-view-component="true"
                className=" text-white"
              >
                <path d="M2.828 4.328C5.26 1.896 9.5 1.881 11.935 4.317c.024.024.046.05.067.076 1.391-1.078 2.993-1.886 4.777-1.89a6.22 6.22 0 0 1 4.424 1.825c.559.56 1.023 1.165 1.34 1.922.318.756.47 1.617.468 2.663 0 2.972-2.047 5.808-4.269 8.074-2.098 2.14-4.507 3.924-5.974 5.009l-.311.23a.752.752 0 0 1-.897 0l-.312-.23c-1.466-1.085-3.875-2.869-5.973-5.009-2.22-2.263-4.264-5.095-4.27-8.063a6.216 6.216 0 0 1 1.823-4.596Zm8.033 1.042c-1.846-1.834-5.124-1.823-6.969.022a4.712 4.712 0 0 0-1.382 3.52c0 2.332 1.65 4.79 3.839 7.022 1.947 1.986 4.184 3.66 5.66 4.752a78.214 78.214 0 0 0 2.159-1.645l-2.14-1.974a.752.752 0 0 1 1.02-1.106l2.295 2.118c.616-.52 1.242-1.08 1.85-1.672l-2.16-1.992a.753.753 0 0 1 1.021-1.106l2.188 2.02a18.963 18.963 0 0 0 1.528-1.877l-.585-.586-1.651-1.652c-1.078-1.074-2.837-1.055-3.935.043-.379.38-.76.758-1.132 1.126-1.14 1.124-2.96 1.077-4.07-.043-.489-.495-.98-.988-1.475-1.482a.752.752 0 0 1-.04-1.019c.234-.276.483-.576.745-.893.928-1.12 2.023-2.442 3.234-3.576Zm9.725 6.77c.579-1.08.92-2.167.92-3.228.002-.899-.128-1.552-.35-2.08-.22-.526-.551-.974-1.017-1.44a4.71 4.71 0 0 0-3.356-1.384c-1.66.004-3.25.951-4.77 2.346-1.18 1.084-2.233 2.353-3.188 3.506l-.351.423c.331.332.663.664.993.998a1.375 1.375 0 0 0 1.943.03c.37-.365.748-.74 1.125-1.118 1.662-1.663 4.373-1.726 6.06-.045.56.558 1.12 1.12 1.658 1.658Z"></path>
              </svg>
              <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-2 z-3"></span>
            </motion.div>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ delay: 0.3 }}
              viewport={{ once: false }}
              className="  ml-2 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#ea6045] to-[#ffa28b]"
            ></motion.div>
          </div>
          <div className="md:w-10/12 mb-24">
            <motion.div
              className=" delay-200 mt-[9rem] text-xl md:text-2xl mb-7 font-medium text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              viewport={{ once: false }}
            >
              Collaboration
            </motion.div>
            <motion.h3 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white">
              <span className="text-[#ffa28b]">Supercharge collaboration.</span>
              We provide unlimited repositories, best-in-class version control,
              and the world’s most powerful open source community—so your team
              can work more efficiently together.
            </motion.h3>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween" }}
          className=""
        >
          <img
            src="/issues-plan.webp"
            alt=""
            className=" w-full h-auto rounded-2xl"
          />
        </motion.div>

        <Discount />

        <div className="flex justify-between items-center">
          <div className="flex justify-between md:space-x-10 max-md:flex-col">
            <HoverCard backgroundColor="#ffa28b" direction="flex-col" left="0">
              <div className="md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 ">
                <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                  <span className="text-white font-semibold">
                    GitHub Discussions
                  </span>
                  create space to ask questions and have open-ended
                  conversations.
                </p>
                <div>
                  <a
                    onMouseEnter={() => sethovered(true)}
                    onMouseLeave={() => sethovered(false)}
                    href=""
                    className=" md:text-xl text-white font-semibold inline-block"
                  >
                    Enable GitHub Discussions
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={` text-white transition inline-block ml-3 ease-in duration-300 mb-[3px] ${
                        hovered ? "translate-x-0 " : "-translate-x-1"
                      }`}
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                      ></path>
                      <path
                        className={` text-white transition ease-in duration-150 ${
                          hovered ? " opacity-100" : "opacity-0 "
                        }`}
                        stroke="currentColor"
                        d="M1.75 8H11"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <div
                      className={` ${
                        hovered ? "w-11/12 scale-100" : "w-0 scale-0"
                      } origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-s-lg">
                <img
                  className="w-full h-auto "
                  width="1209"
                  height="890"
                  loading="lazy"
                  decoding="async"
                  alt=""
                  aria-hidden="true"
                  src="/illu-discussions.webp"
                />
              </div>
            </HoverCard>

            <HoverCard
              backgroundColor="#ffa28b"
              direction="flex-col"
              left="-400px"
            >
              <div className="md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 ">
                <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                  <span className="text-white font-semibold mr-2">
                    Pull requests
                  </span>
                  allow real-time communication and collaboration about code
                  changes.
                </p>
                <div>
                  <a
                    onMouseEnter={() => sethover(true)}
                    onMouseLeave={() => sethover(false)}
                    href=""
                    className=" md:text-xl text-white font-semibold inline-block"
                  >
                    Get GitHub Mobile
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={` text-white transition inline-block ml-3 ease-in duration-300 mb-[3px] ${
                        hover ? "translate-x-0 " : "-translate-x-1"
                      }`}
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                      ></path>
                      <path
                        className={` text-white transition ease-in duration-150 ${
                          hover ? " opacity-100" : "opacity-0 "
                        }`}
                        stroke="currentColor"
                        d="M1.75 8H11"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <div
                      className={` ${
                        hover ? "w-11/12 scale-100" : "w-0 scale-0"
                      } origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-s-lg">
                <img
                  className="w-full h-auto "
                  width="1209"
                  height="890"
                  loading="lazy"
                  decoding="async"
                  alt=""
                  aria-hidden="true"
                  src="/illu-pull-requests.webp"
                />
              </div>
            </HoverCard>
          </div>
        </div>

        <HoverCard
          backgroundColor="#ffa28b"
          direction=""
          left="-400px"
        >
          <div className=" md:flex flex-col md:space-y-20 flex-1 py-20 p-10  justify-between">
          <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                  <span className="text-white font-semibold mr-2">
                    Pull requests
                  </span>
                  allow real-time communication and collaboration about code
                  changes.
                </p>
                <div>
                  <a
                    onMouseEnter={() => sethover(true)}
                    onMouseLeave={() => sethover(false)}
                    href=""
                    className=" md:text-xl text-white font-semibold inline-block"
                  >
                    Get GitHub Mobile
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={` text-white transition inline-block ml-3 ease-in duration-300 mb-[3px] ${
                        hover ? "translate-x-0 " : "-translate-x-1"
                      }`}
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                      ></path>
                      <path
                        className={` text-white transition ease-in duration-150 ${
                          hover ? " opacity-100" : "opacity-0 "
                        }`}
                        stroke="currentColor"
                        d="M1.75 8H11"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <div
                      className={` ${
                        hover ? "w-11/12 scale-100" : "w-0 scale-0"
                      } origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}
                    ></div>
                  </a>
                </div>
              </div>


              <div className='overflow-hidden rounded-s-lg z-[1] flex-1'>
              <motion.div variants={container} initial='hidden' whileInView='show'  className='flex flex-wrap w-full relative -top-[120px] -rotate-12 -right-6 -mt-6  p-6 max-h-[480px]'>
               {
                data.map((item)=>(
                  <Card image={item.image} text={item.text} title={item.title} key={item.id}/>
                ))
               }
               
                </motion.div>
                </div>
        
        </HoverCard>
        <motion.div initial={{height:0}} whileInView={{height:'160px'}} transition={{delay:0.2}} className=" md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#797ef9] to-[#abb4ff]" ></motion.div>
      </div>
    </>
  );
};

export default Collaboration;


