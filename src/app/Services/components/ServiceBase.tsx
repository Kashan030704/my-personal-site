
export default function ServiceBase(){
    return (
        <div className="flex justify-center gap-5">
            <div className="h-50 w-125 p-16 mt-20 rounded-lg bg-white shadow-sm shadow-black border-gray-300 hover:scale-105">
                <h1 className="font-bold text-black text-3xl">
                    Products
                    <div className="text-gray-300 text-base">
                        Coming Soon
                    </div>
                </h1>
            </div>
            <div className="h-50 w-125 p-10 mt-20 rounded-lg bg-white shadow-sm shadow-black border-gray-300 hover:scale-105">
                <h1 className="font-bold text-black text-3xl">
                    Skills & Certifications 
                    <div className="text-gray-500 text-base font-normal">
                        A collection of industry-recognized certifications in cloud computing, complemented by hands-on skills in software development, microcontrollers, and embedded systems using Raspberry Pi.
                    </div>
                </h1>
            </div>
        </div>
    );
}