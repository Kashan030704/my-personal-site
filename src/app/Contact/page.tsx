import Header from "../components/Header";
import HeaderButtons from "../components/HeaderButtons";
import ContactModal from "./components/ContactModal";


export default function Page(){
    
    return (
        <div>
            <div>
                <Header>
                    <HeaderButtons page_number="5"/>
                </Header>
            </div>
            <div className="flex justify-center"><ContactModal/></div>
        </div>
    );
}