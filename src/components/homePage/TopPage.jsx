import image from '../../images/816ba957f5c483074f2e96bb588843f9269a1f72.png'

export const TopContainer = () => {


    return <div className="grid grid-cols-2 w-[80vw] my-[10vh] gap-10 mx-auto items-center">
        <div className='space-y-5'>
            <h2 className="text-7xl font-cumar">Tabia</h2>
            <p className='text-2xl'>Open-source solution  for economic opportunity</p>
            <button className="bg-[#71C55D] w-1/2 py-2 rounded-full text-xl text-white">Get Started</button>
        </div>
        <img src={image} alt="Computer image" />
    </div>

}