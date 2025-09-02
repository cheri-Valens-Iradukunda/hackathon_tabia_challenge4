import { useState } from 'react';
import logo from '../../images/28e44b2b149c7ee16040191beb71db8e526090c9.png'
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineSegment } from "react-icons/md";

export const Navigation = () =>{
    const [isNavDisplayed, setIsNavDisplayed] = useState(false)
    // let [item,setItem] = useState()

    return <div className='grid grid-cols-3 justify-between relative  h-[10vh] items-center bg-white shadow-[0_1px_10px_gray]'>
        <img src={logo} className='w-50 sm:w-40 px-5 py-3' alt="" />
        <ul className='sm:flex hidden sm:gap-5 md:gap-10 lg:gap-16 col-span-2 justify-end items-center font-[500] text-sm'>
            <li><a href="#" className='text-[#71C55D] '>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#">Instant guidance</a></li>
            <li className='bg-[#F1F6F1] -mt-1 text-3xl h-[10vh] px-3 md:px-5 content-center font-extrabold'><MdOutlineAccountCircle /></li>
        </ul>
        <MdOutlineSegment className={`end-0 absolute text-4xl sm:hidden ${isNavDisplayed?"rotate-270":"rotate-0"} transition-transform duration-1000`} onClick={()=>setIsNavDisplayed(!isNavDisplayed)} />
        {/* <div className='h-0 overflow-hidden'> */}

            <ul className={`${isNavDisplayed?"h-[34vh]":"h-0"} transition-all duration-300 block fixed end-0  overflow-hidden top-[10vh]  rounded sm:hidden w-1/3 bg-[#F1F6F1] sm:gap-5 md:gap-10 lg:gap-16 justify-end items-center font-[500] text-sm`}>
                <div className='pt-5 p-2 space-y-3'>
                    <li className='-mt-1 text-3xl h-fit w-fit  content-center font-extrabold'><MdOutlineAccountCircle /></li>
                    <li><a href="#" className='text-[#71C55D] '>Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Service</a></li>
                    <li><a href="#">Instant guidance</a></li>
                </div>
            </ul>
        {/* </div> */}
    </div>

}