import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'framer-motion';


function Card({data, reference}) {
  return (
    <motion.div
     drag 
     dragConstraints={reference} 
     whileDrag={{scale:1.2}} 
     className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900 text-white px-5 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-5 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-300 rounded-full flex items-center justify-center'>
                {data.close ? <IoCloseSharp/> :                 <MdOutlineFileDownload size=".8em" color='#000'/>
                }
                </span>
            </div>
            {
                data.tag.isOpen ?(
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex item-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
                ): null
            }
            
        </div>
    </motion.div>

  )
}

export default Card
