import  { useState } from "react";

type Props = {
  main: string;
  submain: string;
  path: string;
  secondpath: string;
};

function Navitems({ main, submain, path, secondpath }: Props) {
  const [focus, setfocus] = useState<boolean>(false);
  return (
    <>
      <a
        href=""
        onMouseEnter={() => setfocus(true)}
        onMouseLeave={() => setfocus(false)}
        className="py-3 flex items-center space-x-3 cursor-pointer"
      >
        <svg
          aria-hidden="true"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          version="1.1"
          width="24"
          data-view-component="true"
          className={` mr-3 transition ease-in duration-100  ${
            focus ? "text-blue-600" : "text-neutral-500"
          }`}
        >
          <path d={path}></path>
          <path d={secondpath}></path>
        </svg>
        <div
          className={`  ${
            focus ? "text-blue-500" : "text-neutral-500"
          } transition ease-in duration-100 text-[14px]`}
        >
          <div
            className={`font-semibold transition ease-in duration-100 text-base leading-5 ${
              focus ? "text-blue-500" : " text-neutral-500"
            }  `}
          >
            {main}
        
          </div>
          {submain}
        </div>
      </a>
    </>
  );
}

export default Navitems;
