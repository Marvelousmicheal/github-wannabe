import React, { useState } from "react";
import Earth from "../components/footer/Earth";
import Earth2 from "../components/footer/Earth1";

type Props = {};

function Footer({}: Props) {
  const [hover, sethover] = useState(false);
  const [hover1, sethover1] = useState(false);
  return (
     
    <>
      <div className="overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto relative z-10">
            <img src="/footer-galaxy.webp" alt="" aria-hidden="true" width="801" height="807" loading="lazy" decoding="async" className="absolute top-0 left-0 w-full h-full object-cover d-block pointer-events-none"/>
          <div className="flex my-8 md:my-16 sm:my-12 relative md:items-center text-center flex-col">
            <div className="py-3 mb-2 flex flex-col justify-center items-center">
              <h2 className="px-4 mb-4 md:w-9/12 mx-auto lg:text-5xl md:text-4xl text-3xl font-bold text-white">
                The place for anyone from anywhere to build anything
              </h2>
              <p className="mb-4 md:text-xl text-[16px] text-[#7d8590] px-4 mx-auto md:w-7/12">
                Whether you’re scaling your startup or just learning how to
                code, GitHub is your home. Join the world’s largest developer
                platform to build the innovations that empower humanity. Let’s
                build from here.
              </p>
              <div className="lg:ml-5 flex items-center justify-center lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5">
              <a onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} href="" className='flex items-center bg-white font-bold px-14 py-3 justify-center rounded-md text-[20px]'>
                Sign up for GitHub
                  <svg xmlns="http://www.w3.org/2000/svg" className={` ml-2 transition ease-in duration-150 ${hover ? "translate-x-2 ": "-translate-x-0"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={`  transition ease-in duration-150 ${hover ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
              </a>
              <a onMouseEnter={() => sethover1(true)} onMouseLeave={() => sethover1(false)} href="" className='flex items-center text-white font-bold justify-center space-x-2 text-[20px]  border-[1px] border-neutral-500 px-4 py-3 rounded-md'>
                Start a free enterprise trail
                  <svg xmlns="http://www.w3.org/2000/svg" className={` ml-2 transition ease-in duration-150 ${hover1 ? "translate-x-2 ": "-translate-x-0"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 origin-right ${hover1 ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
              </a>
              </div>
            </div>
          </div>
          <div className="relative z-[2] max-sm:hidden">
<Earth/>
          </div>
          <div className="relative z-[2] sm:hidden">
<Earth2/>
          </div>
          <div className='flex items-center justify-center relative z-[2] mt-[-200px]'>
      <img alt="Mona looking at the galaxy" width="801" height="807" className="pointer-events-none  w-[400px] object-cover h-[403px]" src="/astrocat.png" />
    </div>
        </div>
      </div>
      <div className='footer relative pt-14  '>
      <div className='max-w-[1280px] mx-auto relative z-[2] overflow-hidden'>
        <div className='flex flex-col lg:flex-row py-10 mb-8 space-x-6 px-4'>
            <div className='mb-12 px-2'>
              <a href="/" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to home&quot;,&quot;label&quot;:&quot;text:home&quot;}" className="color-fg-default d-inline-block" aria-label="Go to GitHub homepage">
                <svg height="30" aria-hidden="true" viewBox="0 0 45 16" fill='currentColor' version="1.1" width="84" data-view-component="true" className="text-white">
                  <path d="M8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17Zm35.85 2.33c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88ZM27.68 2.43c.09 0 .17.08.17.17v11.11c0 .09-.08.17-.17.17h-2.13c-.09 0-.17-.08-.17-.17l.02-4.75h-3.31v4.75c0 .09-.08.17-.17.17h-2.13c-.08 0-.17-.08-.17-.17V2.6c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v4.09h3.31V2.6c0-.09.08-.17.17-.17Zm8.26 3.64c.11 0 .19.08.19.17l-.02 7.47c0 .09-.06.17-.17.17H34.6c-.07 0-.14-.04-.16-.09-.03-.06-.08-.45-.08-.45s-1.13.77-2.52.77c-1.69 0-2.92-.55-2.92-2.75V6.25c0-.09.08-.17.17-.17h2.14c.09 0 .17.08.17.17V11c0 .75.22 1.09.97 1.09s1.3-.39 1.3-.39V6.26c0-.11.06-.19.17-.19Zm-17.406 5.971h.005a.177.177 0 0 1 .141.179v1.5c0 .07-.03.14-.09.16-.1.05-.74.22-1.27.22-1.16 0-2.86-.25-2.86-2.69V8.13h-1.11c-.09 0-.17-.08-.17-.19V6.58c0-.08.05-.15.13-.17.07-.01 1.16-.28 1.16-.28V3.96c0-.08.05-.13.14-.13h2.16c.09 0 .14.05.14.13v2.11h1.59c.08 0 .16.08.16.17v1.7c0 .11-.07.19-.16.19h-1.59v3.131c0 .47.27.83 1.05.83.247 0 .481-.049.574-.05ZM12.24 6.06c.09 0 .17.08.17.17v7.37c0 .18-.05.27-.25.27h-1.92c-.17 0-.3-.07-.3-.27V6.26c0-.11.08-.2.17-.2Zm29.99 3.78c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25ZM11.19 2.68c.75 0 1.36.61 1.36 1.38 0 .77-.61 1.38-1.36 1.38-.77 0-1.38-.61-1.38-1.38 0-.77.61-1.38 1.38-1.38Zm7.34 9.35v.001l.01.01h-.001l-.005-.001v.001c-.009-.001-.015-.011-.024-.011Z"></path>
                </svg>
              </a>
              <div className='text-white'>
                <h2 className='mt-6 font-semibold'>Subscribe to our newsletter</h2>
                <p className="text-[14px] text-[#7d8590] mb-6 ">Get product updates, company news, and more.</p>
                <a href="" className='mb-6 px-6 py-3 text-[17px] font-semibold border-[0.5px] border-gray-400 rounded-lg'>Subscribe</a>
              </div>
            </div>
            <div className='lg:flex w-full justify-between grid md:grid-cols-4 grid-cols-2 gap-6'>
              <div className='text-[#7d8590]'>
                <h2 className='font-medium mb-4 font-mono'>Product</h2>
                <ul className='text-[14px]'>
                    <li className='mb-4'><a href="">Features</a></li>
                    <li className='mb-4'><a href="">Security</a></li>
                    <li className='mb-4'><a href="">Team</a></li>
                    <li className='mb-4'><a href="">Enterprise</a></li>
                    <li className='mb-4'><a href="">Custom Stories</a></li>
                    <li className='mb-4'><a href="">The ReadME Project</a></li>
                    <li className='mb-4'><a href="">Pricing</a></li>
                    <li className='mb-4'><a href="">Resources</a></li>
                    <li className='mb-4'><a href="">Roadmap</a></li>
                    <li className='mb-4'><a href="">Compare GitHub</a></li>
                </ul>
              </div>
              <div className='text-[#7d8590]'>
                <h2 className='font-medium mb-4 font-mono'>Platform</h2>
                <ul className='text-[14px]'>
                    <li className='mb-4'><a href="">Developer API</a></li>
                    <li className='mb-4'><a href="">Partners</a></li>
                    <li className='mb-4'><a href="">Electron</a></li>
                    <li className='mb-4'><a href="">GitHub Desktop</a></li>
                </ul>
              </div>
              <div className='text-[#7d8590]'>
                <h2 className='font-medium mb-4 font-mono'>Product</h2>
                <ul className='text-[14px]'>
                    <li className='mb-4'><a href="">Docs</a></li>
                    <li className='mb-4'><a href="">Community Forum</a></li>
                    <li className='mb-4'><a href="">Professional Services</a></li>
                    <li className='mb-4'><a href="">Premium Support</a></li>
                    <li className='mb-4'><a href="">Skill</a></li>
                    <li className='mb-4'><a href="">Status</a></li>
                    <li className='mb-4'><a href="">Contact GitHub</a></li>
                </ul>
              </div>
              <div className='text-[#7d8590]'>
                <h2 className='font-medium mb-4 font-mono'>Company</h2>
                <ul className='text-[14px]'>
                    <li className='mb-4'><a href="">About</a></li>
                    <li className='mb-4'><a href="">Blog</a></li>
                    <li className='mb-4'><a href="">Careers</a></li>
                    <li className='mb-4'><a href="">Press</a></li>
                    <li className='mb-4'><a href="">Inclusion</a></li>
                    <li className='mb-4'><a href="">Social Impact</a></li>
                    <li className='mb-4'><a href="">Shop</a></li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      <div className='bg-[#161b22]'>
        <div className='max-w-[1280px] mx-auto text-[12px] md:flex flex-row-reverse py-6 justify-between items-center px-4'>
          <ul className='flex items-center max-md:mb-4  '>
            <li className='mr-4'>
              <a href=""><img src="/x.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li className='mr-4'>
              <a href=""><img src="/facebook.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li className='mr-4'>
              <a href=""><img src="/linkedin.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li className='mr-4'>
              <a href=""><img src="/youtube.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li className='mr-4'>
              <a href=""><img src="/twitch.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li className='mr-4'>
              <a href=""><img src="/tiktok.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li>
              <a href=""><img src="/github-mark.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
          </ul>
          <ul className='flex items-center mb-4 sm:mb-0 text-[#7d8590] flex-wrap' >
            <li className="mr-3 ">© 2023 GitHub, Inc.</li>
            <li className='mr-3 '><a href="">Terms</a></li>
            <li className='mr-3 '><a href="">Privacy (Updated 08/2022)</a></li>
            <li className='mr-3 '><a href="">Sitemap</a></li>
            <li className='mr-3 '><a href="">What is Git?</a></li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}

export default Footer;
