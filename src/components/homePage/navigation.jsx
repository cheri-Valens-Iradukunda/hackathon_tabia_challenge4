import logo from '../../images/28e44b2b149c7ee16040191beb71db8e526090c9.png'

export const Navigation = () =>{

    // let [item,setItem] = useState()

    return <div className='flex justify-between items-center bg-white shadow-[0_1px_10px_gray]'>
        <img src={logo} className='w-40 px-5 py-3' alt="" />
        <ul className='flex gap-16 font-[500] text-sm'>
            <li><a href="#" className='text-[#71C55D] '>Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Instant guidance</a></li>
        </ul>
    </div>

}