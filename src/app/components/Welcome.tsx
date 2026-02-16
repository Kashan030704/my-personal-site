import TypeWriter from "./TypeWriter";

export default function Welcome() {
  return (
    <div className=" text-4xl ml-30 mt-20">
        <p className="font-bold text-3xl mt-12 mb-8">
          Hello,<span className="text-green-300"> I am.. </span>
        </p>

        <div className="whitespace-nowrap">
            <TypeWriter/>
        </div>

        <p className="font-bold text-xl text-green-300 mt-12">
            Full-Stack Developer & Cloud-certified
        </p>
        <p className="text-lg font-bold mt-8">
            An Electrical Engineering student at the University of Waterloo with a strong foundation in problem solving and applied engineering who enjoys turning ideas into practical solutions through hands-on learning, project work and especially co-op work.
        </p>

    </div>
  );
};  