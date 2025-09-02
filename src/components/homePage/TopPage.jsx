import image from '../../images/816ba957f5c483074f2e96bb588843f9269a1f72.png'

export const TopContainer = () => {


    return <div className="grid grid-cols-1 sm:grid-cols-2 w-[80vw] my-[10vh] gap-10 mx-auto items-center">
        
        <img src={image} alt="Computer image" className='block sm:hidden w-1/2' />
        <div className='space-y-5'>
            <h2 className="text-5xl sm:text-7xl font-cumar">Tabia</h2>
            <p className='text-sm sm:text-2xl'>Open-source solution  for economic opportunity</p>
            <button className="bg-[#71C55D] w-1/2 py-2 rounded-full text-lg sm:text-xl text-white">Get Started</button>
        </div>
        <img src={image} alt="Computer image" className='hidden sm:block' />
    </div>

}