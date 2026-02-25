export default function ContactModal(){
    return (
        <div className="p-4 mt-15 flex flex-col justify-between h-140 w-254 rounded-lg bg-white border-gray-300 shadow-sm">
            {/*User Information */}
            <div className="bg-yellow-200 border-lg p-2">
                <h1 className="font-bold text-black">Important: user information must be field</h1>
            </div>

            <div> {/*Send Mail Button*/}
                <div className="flex justify-center bg-slate-200 rounded-lg border shadow-sm shadow-black h-9">
                    <h1 className="text-2xl text-black font-bold">
                        <button type="submit" className="rounded-lg hover:text-white hover:bg-green-300 w-247 h-10 mb-1">
                            Send Direct Email
                        </button>
                    </h1>
                </div>
                <div className="flex justify-center">
                    <hr className="border-green-300 border-2 w-200"></hr>
                </div>
            </div>
        </div>
    );
}