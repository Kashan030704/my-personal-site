export default function Header({children}:any){

    return (
        <div className="flex bg-black h-25">
                <h1 className="font-bold p-6 text-2xl text-white mt-3">Portfolio.</h1>
                {children}
        </div>
    );
};