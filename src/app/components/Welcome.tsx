import TypeWriter from "./TypeWriter";
export default function Welcome() {
  return (
    <div className="font-bold text-4xl ml-30 mt-20">
        <p className="font-bold text-3xl ml-12 mt-12 mb-8">
          Hello,<span className="text-green-300"> I am.. </span>
        </p>
        <TypeWriter/>
        <p className="font-bold text-2xl ml-12 text-green-300 mt-12">
            Full-Stack Developer & Cloud-certified
        </p>
        <p className="font-bold text-base mt-8">
        
        </p>
    </div>
  );
};  