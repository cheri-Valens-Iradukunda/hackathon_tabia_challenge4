import icon1 from "../../images/f72aa6e4a83d4e7fb03bc5dc1f86a17aa5b4d775.png"
import icon2 from "../../images/728016a88a51d558b78b46fb0d0469655a624f7a.png"
import icon3 from "../../images/32c63350e3ef2d1906994cbb4236511f172e1e65.png"
export const Services = () => {


    const card = (icon,name,description) =>{
        return <div className="bg-white p-5 space-y-5 rounded">
            <div>
                <img src={icon} alt="" className="bg-[#71C55D] p-3 w-20 rounded-full" />
            </div>
            <h3 className="text-2xl text-[#71C55D] font-semibold">{name}</h3>
            <p className="text-md text-gray-800">{description}</p>
        </div>
    }

    return <div className="w-8/9 mx-auto space-y-5" id="services">

        <h2 className="capitalize text-center text-2xl font-semibold font-intel">check our <span className="text-[#71C55D]">services</span></h2>
        <div className="grid grid-cols-3 gap-5">
            {card(icon1,'Career orientation',`Lorem ipsum, placeholder or dummy used in typesetting and graphic design for previewing layouts.`)}
            {card(icon2,'Resource provision',`Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts.`)}
            {card(icon3,'Career guidance',`Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts.`)}
            
        </div>
    </div>

}