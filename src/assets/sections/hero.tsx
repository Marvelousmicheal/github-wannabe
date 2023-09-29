import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  const [hover, sethover] = useState<boolean>(false);
  const [hovered, sethovered] = useState<boolean>(false);
  return (
    <>
      <div className="relative max-w-[1280px] lg:pt-32 md:px-10 mx-auto pt-16">
        <img
          src="/hero-drone.webp"
          alt="hero image"
          className="absolute hero-drone top-28 w-1/4 h-auto right-0 xl:right-0"
          width="500"
          height="326"
        />
        <div className="flex">
          <div className="relative">
            <img
              src="/lines-hero.svg"
              alt="line"
              aria-hidden="true"
              width="437"
              height="637"
              className="mb-2"
            />
            <span className="relative  ">
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                version="1.1"
                width="24"
                data-view-component="true"
                className=" text-white"
              >
                <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
              </svg>
              <span
                className="absolute left-0 top-0 w-6 h-full  home-campaign-glowing-icon-glow filter blur-[10px]"
                style={{ backgroundColor: "var(--mktg-accent-primary)" }}
              ></span>
            </span>
            <div className="mt-1 max-md:w-[2px] w-[3px] h-[450px] max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md ml-[11px] relative">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className=" max-md:w-[2px] w-[3px] h-[450px] max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md  relative"
                style={{
                  background:
                    "linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)",
                }}
              ></motion.div>
            </div>
          </div>

          <div className="absolute pt-32 mt-28 max-md:px-4 ml-4 md:ml-12  px-2 ">
            <div className="relative md:top-20 mb-[24px]">
              <a
                href=""
                className="border-[1px] border-neutral-600 copilot rounded-full inline-block "
                onMouseEnter={() => sethover(true)}
                onMouseLeave={() => sethover(false)}
              >
                <div className="flex items-center p-3 md:px-5 px-2">
                  <img
                    src="/github-thing.png"
                    alt=""
                    className=" d-block  flex-grow-0 flex-shrink-0 mr-6 max-md:mr-3 scale-110 w-12"
                    loading="lazy"
                    decoding="async"
                    aria-hidden="true"
                  />
                  <div className="md:pr-5 pr-3 md:mr-2 md:pl-2">
                    <h3 className="font-medium text-white text-[16px] max-md:text-[14px] leading-5 ">
                      Introducing Brainless Copilot X
                    </h3>
                    <h3 className="font-medium text-gray-400 md:text-[16px] text-xs  ">
                      Your Dumbass pair programmer is Fucking Dumb
                    </h3>
                  </div>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`  text-white transition ease-in duration-150 ${
                        hover ? "translate-x-0 " : "-translate-x-1"
                      }`}
                      width="16"
                      height="16"
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
                  </div>
                </div>
              </a>
            </div>

            <h1 className="md:mt-24 lg:mt-28 sm:mt-10 relative z-2 max-md:mb-5 text-[48px] md:text-[72px] max-sm:leading-[60px] max-md:leading-[80px] lg:text-[80px] font-semibold text-white capitalize">
              {" "}
              let's store your trashy code
            </h1>
            <p className="relative z-1 text-[16px] md:text-[28px]  lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[44px] mb-5 md:mb-12 md:10/12  lg:w-9/12 text-[#7d8590]">
              Harnessed for committing. Designed for bad laptops with horrible
              battery. Celebrated for built-in security, that you probably dont
              care about. Welcome to the platform for developers and !love.
            </p>
            <div className="flex lg:w-11/12 md:space-x-5 max-md:flex-col  ">
              <form action="">
                <div className=" md:flex block space-y-5 md:space-y-0 md:w-[30rem] relative w-full">
                  <input
                    className="h-12 focus:outline-none max-md:rounded-md md:rounded-s-md right-0 w-full placeholder:text-lg pl-3"
                    placeholder="Email address"
                    type="email"
                    id="user_email"
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <div className=" md:w-[57%] w-full relative "  onMouseEnter={() => sethover(true)}
                onMouseLeave={() => sethover(false)}>
                    <button
                      type="button"
                      className="mb-10 md:mb-0 w-full py-3 home-campaign-signup-button  text-[16px] max-md:rounded-md md:rounded-e-md text-white font-bold"
                    >
                      Sign up for GitHub
                    </button>

                    <div 
                      className={`${hover ? "absolute w-full h-4  home-campaign-glowing-icon-glow filter blur-[24px]":"hidden transition-all ease-in-out duration-100"}`} 
                      style={{ backgroundColor: "var(--mktg-accent-primary)" }}
                    ></div>
                  </div>
                </div>
              </form>
              <span className="border-t-[1px] md:border-l border-neutral-700 md:mx-10 mb-3 md:mb-0"></span>
              <a
                href=""
                onMouseEnter={() => sethovered(true)}
                onMouseLeave={() => sethovered(false)}
                className={`flex items-center w-full md:w-auto justify-center  md:text-base text-sm  max-md:mt-4 rounded-md transition ease-in-out duration-150 ${
                  hovered
                    ? "   border-white border-[2px] py-2 px-4"
                    : "border-[#ae88f9] border py-3 px-5"
                }   text-white`}
              >
                Please Enter your credit card and forget it
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={` arrow-symbol-mktg text-white ml-3 transition ease-in duration-150 ${
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
              </a>
            </div>

            <div className="md:my-20  ">
              <p className="text-base leading-6 text-[#7d8590] ">
                Trusted by the world's leading organizations, Source: Trust me
                Bro ↘︎
              </p>

              <div className="flex flex-wrap justify-between items-center">
                <img
                  src="/mercedes.svg"
                  alt="mercedes logo"
                  height="44"
                  className="my-3 scale-90"
                />
                <img
                  src="/stripe.svg"
                  alt="Stripe logo"
                  height="44"
                  className="my-3 scale-90"
                />
                <img
                  src="/pg.svg"
                  alt="pg logo"
                  height="44"
                  className="my-3 scale-90"
                />
                <img
                  src="pinterest.svg"
                  alt="pinterest logo"
                  height="44"
                  className="my-3 scale-90"
                />
                <img
                  src="/telus.svg"
                  alt="telus logo"
                  height="44"
                  className="my-3 scale-90"
                />
                <img
                  src="/kpmg.svg"
                  alt="kpmg logo"
                  height="44"
                  className="my-3 scale-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
