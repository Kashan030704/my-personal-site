import Link from "next/link";

export default function HeaderButtons({page_number}:any){

    const page = [
            " hover:",
            " hover:",
            " hover:",
            " hover:",
            " hover:"
        ]

    if(page_number === "1") page[0]=" ";
    else if(page_number=== "2") page[1]=" ";
    else if(page_number === "3") page[2]=" ";
    else if(page_number === "4") page[3]=" ";
    else if(page_number === "5") page[4]=" ";

        return (
        
        <div className="flex gap-8 font-bold p-6 text-2xl text-white ml-180 mt-3">
            <Link href=".">
                <button className={`h-0.5 rounded-lg${page[0]}bg-green-300 text-base`}> About</button>
            </Link>
            <Link href="/Experience">
                <button className={`h-0.5 rounded-lg${page[1]}bg-green-300 text-base`}> Experience</button>
            </Link>
            <Link href="/Services">
                <button className={`h-0.5 rounded-lg${page[2]}bg-green-300 text-base`}>Services</button>
            </Link>
            <Link href="/Projects">
                <button className={`h-0.5 rounded-lg${page[3]}bg-green-300 text-base`}>Projects</button>
            </Link>
            <Link href="/Contact">
                <button className={`h-0.5 rounded-lg${page[4]}bg-green-300 text-base`}>Contact</button>
            </Link>
        </div>
    );

};