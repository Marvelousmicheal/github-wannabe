import React from 'react'
import {motion} from "framer-motion"
type Props = {
    image:string
    text:string
    title:string
}

const Card = ({image, text, title}: Props) => {
    const item = {
        hidden: { opacity: 0, y:40 },
        show: { opacity: 1, y:0},
    };
  return (
   <>
   
                  <motion.div variants={item} transition={{type:'tween'}} className='w-1/3 '>
                      <a href="" target='_blank' className='rounded-md bg-[#161b22] border-[0.5px] border-[#30363d] flex flex-col items-center m-2 p-6'>
                        <img alt="Homebrew avatar" width="96" height="96" className="d-block rounded-md" loading="lazy" decoding="async" src={image} />
                        <div className="text-[#7d8590] my-2">{text}</div>
                        <button type="button" className=' bg-[#21262d] rounded-md '>
                            <span className='flex items-center justify-between px-2 py-1 space-x-2'>
                              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" fill='currentColor' version="1.1" width="16" data-view-component="true" className="octicon octicon-heart text-[#c9d1d9]">
                                  <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
                              </svg>
                              <span className="Button-label text-[#c9d1d9]">{title}</span>
                            </span>
                        </button>
                      </a>
                  </motion.div>
                 
   </>
  )
}

export default Card