import career from '../../images/ad7819aec963a4053c929081334bdb6f45bff039.png'
import ocupation from '../../images/4e2c6f5bf73e5de112e58f1aeb97762756fbd11c.png'
import resources from '../../images/3fb68aa0367dba92d8b9073ba039cd29f3592e28.png'
import skills from '../../images/c39882f27931c9a722c55351a433658d5bec88d2.png'

export const Careers = () => {

    const card = (image,name,number) => {

        return <div className='bg-white rounded p-5 mb-10 space-y-3 text-center'>
            <img src={image} alt="Career icon" className='w-15 sm:w-20 mx-auto' />
            <h3 className='text-xl sm:text-2xl font-semibold'>{name}</h3>
            <p className='text-md sm:text-xl font-semibold'>{number}+</p>
        </div>
    }

    return <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 px-4 sm:w-[90vw] gap-5  mx-auto '>
        {card(career,'Career',"10,000")}
        {card(ocupation,'Ocupation',"5,000")}
        {card(resources,'Resource',"10,000")}
        {card(skills,'Skills',"20,000")}
    </div>

}