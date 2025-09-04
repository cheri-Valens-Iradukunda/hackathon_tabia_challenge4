import image1 from "../../images/Ben-Savonen-optimized.jpg"
import image2 from "../../images/headshot-nyambura.webp"
import image3 from "../../images/headshot-christian.webp"
export const Footer = () => {

    let card = (head,image,name,position) => {

        return <div className="[&>*]:mx-auto space-y-2 bg-white h-fit w-[90vw] xs:w-full p-5">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{head}</h2>
            <img src={image} alt="" className="w-20 rounded-full" />
            <h3 className="text-lg sm:text-xl font-semibold">{name}</h3>
            <p>{position}</p>
                <a href="#" className="underline text-[#3c3ca2] font-semibold">Email {name.split(" ")[0]}</a>
        </div>
    }

    return <div className="bg-[#EBEBEB] h-fit text-center mt-20 space-y-5 p-5 sm:p-20">
        <h2 className="text-[#71C55D] capitalize text-3xl sm:text-4xl font-bold ">let's connect</h2>
        <p className="sm:w-2/3 w-full mx-auto text-gray-700 xs:text-md sm:text-lg">Whether you're looking to learn more, explore a partnership, 
            or support our mission to build digital public infrastructure for youth employment, we’d love to connect.</p>
        
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 m-10 space-y-10 ">
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