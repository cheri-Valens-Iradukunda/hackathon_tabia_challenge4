import image1 from "../../images/Ben-Savonen-optimized.jpg"
import image2 from "../../images/headshot-nyambura.webp"
import image3 from "../../images/headshot-christian.webp"
export const Footer = () => {

    let card = (head,image,name,position) => {

        return <div className="[&>*]:mx-auto space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">{head}</h2>
            <img src={image} alt="" className="w-20 rounded-full" />
            <h3 className="text-xl font-semibold">{name}</h3>
            <p>{position}</p>
                <a href="#" className="underline">Email {name.split(" ")[0]}</a>
        </div>
    }

    return <div className="bg-[#EBEBEB] h-fit text-center mt-20 space-y-5 p-20">
        <h2 className="text-[#71C55D] capitalize text-4xl font-bold ">let's connect</h2>
        <p className="w-2/3 mx-auto text-gray-700 text-lg">Whether you're looking to learn more, explore a partnership, 
            or support our mission to build digital public infrastructure for youth employment, we’d love to connect.</p>
        
        <div className="grid grid-cols-3 m-10 ">
            {card(
                "Request A Demo",
                image1,
                "Ben Savonen",
                "Director, Innovation"
                )}
            {card(
                "Partner With Tabiya",
                image2,
                "Nyambura Kariuki",
                "Director, Community"
                )}
            {card(
                "General Inquiries",
                image3,
                "Christian Meyer",
                "CEO and Co-Founder"
                )}
        </div>
    </div>
}