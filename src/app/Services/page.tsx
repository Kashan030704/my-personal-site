import Header from "../components/Header";
import HeaderButtons from "../components/HeaderButtons";
import Carousel from "../components/Carousel";
import ServiceBase from "./components/ServiceBase";

export default function Page(){
    return (
        <div> 
        <div>
            <Header>
                <HeaderButtons page_number="3"/>
            </Header>
        </div>
        <div>
            <ServiceBase/>
        </div>
        <div className="text-black font-black flex justify-center rounded-lg ml-46 mt-5 h-55 w-255 bg-white border shadow-sm shadow-black">
            Preview: <Carousel/> 
        </div>

        </div>
    )
};