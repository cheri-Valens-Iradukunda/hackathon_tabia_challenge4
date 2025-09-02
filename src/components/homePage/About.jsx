import firstImage from '../../images/d49c03172f729f4e0a9a76a41cc366ff9c9cca70.jpg'
import secondImage from '../../images/198a4488c3a0d496dfbb78529f1c8c7e9b0313b9.jpg'
import ThirdImage from '../../images/eda60ab3036eeebd8e57003ca3787b198d6e5dc4.jpg'

export const About = () => {

    return <div className="grid grid-cols-1 sm:grid-cols-2 gap-[5vw] items-center w-full bg-white p-10" id='about'>
        <div className='space-y-10'>
            <h4 className='text-gray-500 font-semibold'>About us</h4>
            <h2 className='font-bold text-2xl text-gray-700'>Who are we</h2>
            <p className='text-md xs:text-lg sm:text-xl'>Tabiya builds <span className='font-semibold text-[#020235]'> open-source software and standards to unlock economic opportunity
                 for all.</span> We partner with government employment services, NGOs, and job platforms to create 
                 pathways that recognize skills from all work – including informal and traditionally unseen 
                 activities. Our mission is to make labor markets more efficient, equitable, and inclusive.
            </p>
        </div>
        <div className='grid grid-cols-2 gap-4'>
            <img src={firstImage} alt="" className='h-full w-full' />
            <div className='grid grid-rows-2 gap-4'>
                <img src={secondImage} alt="" className='h-full' />
                <img src={ThirdImage} className='h-full' alt="" />
            </div>
        </div>

    </div>

}