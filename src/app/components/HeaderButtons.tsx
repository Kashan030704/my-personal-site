export default function HeaderButtons(){
    return (
        
        <div className="flex gap-8 font-bold p-6 text-2xl text-white ml-180 mt-3">
            <button className="h-0.5 rounded-lg hover:bg-green-300 text-base"> About</button>
            <button className="h-0.5 rounded-lg hover:bg-green-300 text-base"> Experience</button>
            <button className="h-0.5 rounded-lg hover:bg-green-300 text-base">Services</button>
            <button className="h-0.5 rounded-lg hover:bg-green-300 text-base">Projects</button>
            <button className="h-0.5 rounded-lg hover:bg-green-300 text-base">Contact</button>
        </div>
    );

};