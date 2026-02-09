import TypeWriter from "./TypeWriter";

export default function Welcome() {
  return (
    <div className="max-w-xl text-4xl ml-30 mt-20">
        <p className="font-bold text-3xl mt-12 mb-8">
          Hello,<span className="text-green-300"> I am.. </span>
        </p>
        <TypeWriter/>
        <p className="font-bold text-xl text-green-300 mt-12">
            Full-Stack Developer & Cloud-certified
        </p>
        <p className="text-lg font-bold mt-8">
            I am an Electrical Engineering student at the University of Waterloo with a strong foundation in problem solving and applied engineering. I enjoy turning ideas into practical solutions through hands-on learning, project work and especially co-op work.
        </p>

    </div>
  );
};  